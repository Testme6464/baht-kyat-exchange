'use strict';
/* =====================================================================
 * ExchangeStore — ONE async data interface for all views, two backends:
 *  (1) Supabase backend, used when js/config.js has real keys.
 *  (2) localStorage demo backend, used when the keys are empty.
 *      Seeded with demo users/orders. Demo passwords are SHA-256 hashed
 *      (SubtleCrypto) and labelled demo-only; demo mode is NOT secure
 *      and must never be used with real money or real customer data.
 *
 * Interface (all methods async unless noted):
 *  isDemoMode (bool), getClient() (supabase client or null)
 *  signUp(email, password, displayName), signIn(email, password),
 *  signOut(), getSession(), resetPassword(email)
 *  ensureProfile(user), getProfile(userId), updateProfile(userId, patch)
 *  isAdmin(userId), listAdmins(), addAdmin(email), removeAdmin(userId)
 *  getSettings(), updateSettings(key, value)
 *  getRates(), setRates(rates, changedBy)
 *  listOrders({userId, isAdmin, status, search})
 *  getOrder(id), createOrder(data), updateOrderStatus(id, status, opts),
 *  cancelOrder(id, userId)
 *  uploadSlip(file, userId), uploadProof(file, userId), getFileUrl(path, bucket)
 *  listUsers(), setBlocked(userId, blocked), getOrderCountsByUser()
 *  getRateHistory(limit), subscribeOrders(callback)
 *
 * Notes: getProfile/updateProfile/isAdmin/getFileUrl/getOrderCountsByUser/
 * subscribeOrders/ensureProfile/getClient are small additions to the
 * original brief — the views cannot work without them (profile editing,
 * private-bucket image viewing, admin checks, realtime updates).
 * No Burmese UI strings live here; all UI text is in js/app.js STRINGS.
 * ===================================================================== */
(function () {
  var cfg = window.EXCHANGE_CONFIG || {};
  var DEMO = !cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY;
  var DEMO_DB_KEY = 'bkx_demo_v1';
  var DEMO_SESSION_KEY = 'bkx_demo_session_v1';
  var DEMO_FILES_KEY = 'bkx_demo_files_v1';

  /* ---------------- shared helpers ---------------- */

  function makeError(code, message) {
    var e = new Error(message || code);
    e.code = code;
    return e;
  }

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function generateOrderNo() {
    var d = new Date();
    var date = '' + d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate());
    var chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    var suffix = '';
    for (var i = 0; i < 4; i++) suffix += chars[Math.floor(Math.random() * chars.length)];
    return 'BKX-' + date + '-' + suffix;
  }

  function newId() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1e9);
  }

  function sanitizeFileName(name) {
    return String(name || 'file').replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 60) || 'file';
  }

  function fileToDataUrl(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () { resolve(reader.result); };
      reader.onerror = function () { reject(makeError('read_failed', 'Could not read file.')); };
      reader.readAsDataURL(file);
    });
  }

  /* SHA-256 hex via SubtleCrypto. Falls back to a plainly-labelled
   * insecure FNV hash when SubtleCrypto is unavailable (demo only). */
  async function hashPassword(password) {
    if (window.crypto && crypto.subtle && crypto.subtle.digest) {
      var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('bkx-demo:' + password));
      return 'sha256:' + Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
    }
    var h = 0x811c9dc5;
    var s = 'bkx-demo:' + password;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return 'fnv-insecure:' + (h >>> 0).toString(16);
  }

  /* ---------------- demo backend (localStorage) ---------------- */

  function demoLoadDb() {
    try { return JSON.parse(localStorage.getItem(DEMO_DB_KEY) || 'null'); }
    catch (e) { return null; }
  }
  function demoSaveDb(db) { localStorage.setItem(DEMO_DB_KEY, JSON.stringify(db)); }
  function demoLoadFiles() {
    try { return JSON.parse(localStorage.getItem(DEMO_FILES_KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function demoSaveFiles(files) {
    try { localStorage.setItem(DEMO_FILES_KEY, JSON.stringify(files)); }
    catch (e) { /* storage full: keep going without persisting the file */ }
  }
  function demoGetSessionRaw() {
    try { return JSON.parse(localStorage.getItem(DEMO_SESSION_KEY) || 'null'); }
    catch (e) { return null; }
  }

  var demoSeedPromise = null;
  function demoEnsureSeeded() {
    if (demoSeedPromise) return demoSeedPromise;
    demoSeedPromise = (async function () {
      if (demoLoadDb()) return;
      var now = Date.now();
      var iso = function (msAgo) { return new Date(now - msAgo).toISOString(); };
      var adminId = newId();
      var user1Id = newId();
      var user2Id = newId();
      var pw = await hashPassword('demo1234');
      var db = {
        profiles: [
          { id: adminId, email: 'admin@demo.local', display_name: 'Demo Admin', phone: '0800000000', is_blocked: false, receivers: [], created_at: iso(30 * 864e5) },
          { id: user1Id, email: 'demo1@demo.local', display_name: 'Aung Aung', phone: '0811111111', is_blocked: false, receivers: [{ method: 'KBZPay', name: 'Aung Aung', account: '0912345678', phone: '0912345678' }], created_at: iso(12 * 864e5) },
          { id: user2Id, email: 'demo2@demo.local', display_name: 'Su Su', phone: '0822222222', is_blocked: false, receivers: [], created_at: iso(5 * 864e5) }
        ],
        credentials: {},
        admins: [adminId],
        settings: {
          rates: { thb_to_mmk: 141.85, mmk_to_thb: 146.41 },
          fees: { fee_percent: 0, min_thb: 100, max_thb: 50000, min_mmk: 10000, max_mmk: 5000000 },
          payments_thb: { methods: [
            { id: 'demo-thb-1', label: 'PromptPay (Demo)', account_name: 'Demo Shop', account_number: '080-000-0000', qr_image_url: '', enabled: true }
          ] },
          payments_mmk: { methods: [
            { id: 'demo-mmk-1', label: 'KBZPay (Demo)', account_name: 'Demo Shop', account_number: '0912345678', qr_image_url: '', enabled: true }
          ] },
          shop: { name: '', announcement: '', is_open: true, open_hours: '09:00 - 21:00', contact_telegram: '', contact_phone: '' }
        },
        orders: [
          { id: newId(), order_no: generateOrderNo(), user_id: user1Id, direction: 'THB_TO_MMK', send_amount: 5000, send_currency: 'THB', receive_amount: 709250, receive_currency: 'MMK', rate: 141.85, fee: 0, receive_method: 'KBZPay', receiver_name: 'Aung Aung', receiver_account: '0912345678', receiver_phone: '0912345678', slip_path: 'demo/slip-1.svg', slip_txn_id: 'DEMO-TXN-1001', status: 'pending', admin_note: '', proof_path: null, created_at: iso(2 * 36e5), updated_at: iso(2 * 36e5), completed_at: null },
          { id: newId(), order_no: generateOrderNo(), user_id: user2Id, direction: 'THB_TO_MMK', send_amount: 2000, send_currency: 'THB', receive_amount: 283700, receive_currency: 'MMK', rate: 141.85, fee: 0, receive_method: 'WavePay', receiver_name: 'Su Su', receiver_account: '0923456789', receiver_phone: '0923456789', slip_path: null, slip_txn_id: 'DEMO-TXN-1002', status: 'reviewing', admin_note: '', proof_path: null, created_at: iso(26 * 36e5), updated_at: iso(3 * 36e5), completed_at: null },
          { id: newId(), order_no: generateOrderNo(), user_id: user1Id, direction: 'MMK_TO_THB', send_amount: 1464100, send_currency: 'MMK', receive_amount: 10000, receive_currency: 'THB', rate: 146.41, fee: 0, receive_method: 'PromptPay', receiver_name: 'Aung Aung', receiver_account: '0811111111', receiver_phone: '0811111111', slip_path: null, slip_txn_id: 'DEMO-TXN-0998', status: 'completed', admin_note: '', proof_path: null, created_at: iso(3 * 864e5), updated_at: iso(3 * 864e5), completed_at: iso(3 * 864e5) },
          { id: newId(), order_no: generateOrderNo(), user_id: user2Id, direction: 'THB_TO_MMK', send_amount: 1000, send_currency: 'THB', receive_amount: 141850, receive_currency: 'MMK', rate: 141.85, fee: 0, receive_method: 'KBZPay', receiver_name: 'Su Su', receiver_account: '0923456789', receiver_phone: '0923456789', slip_path: null, slip_txn_id: 'DEMO-TXN-0990', status: 'rejected', admin_note: 'Demo: slip could not be verified.', proof_path: null, created_at: iso(6 * 864e5), updated_at: iso(6 * 864e5), completed_at: null }
        ],
        rate_history: [
          { id: 3, thb_to_mmk: 141.85, mmk_to_thb: 146.41, changed_by: adminId, created_at: iso(1 * 864e5) },
          { id: 2, thb_to_mmk: 140.90, mmk_to_thb: 145.80, changed_by: adminId, created_at: iso(3 * 864e5) },
          { id: 1, thb_to_mmk: 139.50, mmk_to_thb: 144.20, changed_by: adminId, created_at: iso(7 * 864e5) }
        ]
      };
      db.credentials['admin@demo.local'] = { userId: adminId, hash: pw };
      db.credentials['demo1@demo.local'] = { userId: user1Id, hash: pw };
      db.credentials['demo2@demo.local'] = { userId: user2Id, hash: pw };
      demoSaveDb(db);
      var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="480"><rect width="360" height="480" fill="#eff6ff"/><text x="180" y="220" font-family="sans-serif" font-size="28" font-weight="bold" fill="#1e40af" text-anchor="middle">DEMO SLIP</text><text x="180" y="260" font-family="sans-serif" font-size="16" fill="#64748b" text-anchor="middle">Demo image only</text></svg>';
      var files = demoLoadFiles();
      files['demo/slip-1.svg'] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
      demoSaveFiles(files);
    })();
    return demoSeedPromise;
  }

  function demoFindProfile(db, userId) {
    for (var i = 0; i < db.profiles.length; i++) if (db.profiles[i].id === userId) return db.profiles[i];
    return null;
  }
  function demoPublicProfile(p) {
    if (!p) return null;
    return { id: p.id, email: p.email, display_name: p.display_name, phone: p.phone, is_blocked: p.is_blocked, receivers: p.receivers || [], created_at: p.created_at };
  }

  var demoBackend = {
    async signUp(email, password, displayName) {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      var key = String(email).trim().toLowerCase();
      if (db.credentials[key]) throw makeError('email_in_use', 'Email is already registered.');
      var id = newId();
      db.profiles.push({ id: id, email: String(email).trim(), display_name: displayName || '', phone: '', is_blocked: false, receivers: [], created_at: new Date().toISOString() });
      db.credentials[key] = { userId: id, hash: await hashPassword(password) };
      demoSaveDb(db);
      localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({ userId: id, email: String(email).trim() }));
      return { user: { id: id, email: String(email).trim() } };
    },
    async signIn(email, password) {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      var key = String(email).trim().toLowerCase();
      var cred = db.credentials[key];
      if (!cred) throw makeError('wrong_password', 'Email or password is wrong.');
      if (cred.hash !== await hashPassword(password)) throw makeError('wrong_password', 'Email or password is wrong.');
      var profile = demoFindProfile(db, cred.userId);
      if (profile && profile.is_blocked) throw makeError('blocked', 'This account is blocked.');
      localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({ userId: cred.userId, email: profile ? profile.email : String(email).trim() }));
      return { user: { id: cred.userId, email: profile ? profile.email : String(email).trim() } };
    },
    async signOut() { localStorage.removeItem(DEMO_SESSION_KEY); },
    async getSession() {
      await demoEnsureSeeded();
      var s = demoGetSessionRaw();
      if (!s) return { user: null };
      var db = demoLoadDb();
      var profile = demoFindProfile(db, s.userId);
      if (!profile) { localStorage.removeItem(DEMO_SESSION_KEY); return { user: null }; }
      return { user: { id: profile.id, email: profile.email } };
    },
    async resetPassword() { throw makeError('demo_unsupported', 'Password reset is not available in demo mode.'); },
    async ensureProfile(user) { return this.getProfile(user.id); },
    async getProfile(userId) {
      await demoEnsureSeeded();
      return demoPublicProfile(demoFindProfile(demoLoadDb(), userId));
    },
    async updateProfile(userId, patch) {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      var p = demoFindProfile(db, userId);
      if (!p) throw makeError('not_found', 'Profile not found.');
      if (patch.display_name !== undefined) p.display_name = patch.display_name;
      if (patch.phone !== undefined) p.phone = patch.phone;
      if (patch.receivers !== undefined) p.receivers = patch.receivers;
      demoSaveDb(db);
      return demoPublicProfile(p);
    },
    async isAdmin(userId) {
      await demoEnsureSeeded();
      return demoLoadDb().admins.indexOf(userId) !== -1;
    },
    async listAdmins() {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      return db.admins.map(function (id) {
        var p = demoFindProfile(db, id);
        return { user_id: id, email: p ? p.email : '', display_name: p ? p.display_name : '', created_at: p ? p.created_at : null };
      });
    },
    async addAdmin(email) {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      var key = String(email).trim().toLowerCase();
      var found = null;
      db.profiles.forEach(function (p) { if (p.email.toLowerCase() === key) found = p; });
      if (!found) throw makeError('user_not_found', 'No user with that email.');
      if (db.admins.indexOf(found.id) === -1) db.admins.push(found.id);
      demoSaveDb(db);
      return { user_id: found.id, email: found.email, display_name: found.display_name };
    },
    async removeAdmin(userId) {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      db.admins = db.admins.filter(function (id) { return id !== userId; });
      demoSaveDb(db);
    },
    async getSettings() {
      await demoEnsureSeeded();
      return JSON.parse(JSON.stringify(demoLoadDb().settings));
    },
    async updateSettings(key, value) {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      db.settings[key] = value;
      demoSaveDb(db);
    },
    async getRates() { return (await this.getSettings()).rates; },
    async setRates(rates, changedBy) {
      await this.updateSettings('rates', rates);
      var db = demoLoadDb();
      var nextId = db.rate_history.reduce(function (m, r) { return Math.max(m, r.id); }, 0) + 1;
      db.rate_history.unshift({ id: nextId, thb_to_mmk: rates.thb_to_mmk, mmk_to_thb: rates.mmk_to_thb, changed_by: changedBy || null, created_at: new Date().toISOString() });
      demoSaveDb(db);
    },
    async listOrders(opts) {
      await demoEnsureSeeded();
      opts = opts || {};
      var rows = demoLoadDb().orders.slice();
      if (!opts.isAdmin && opts.userId) rows = rows.filter(function (o) { return o.user_id === opts.userId; });
      if (opts.status) rows = rows.filter(function (o) { return o.status === opts.status; });
      if (opts.search) {
        var q = String(opts.search).toLowerCase();
        rows = rows.filter(function (o) { return (o.order_no || '').toLowerCase().indexOf(q) !== -1; });
      }
      rows.sort(function (a, b) { return b.created_at.localeCompare(a.created_at); });
      return rows;
    },
    async getOrder(id) {
      await demoEnsureSeeded();
      var rows = demoLoadDb().orders.filter(function (o) { return o.id === id; });
      return rows[0] || null;
    },
    async createOrder(data) {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      var now = new Date().toISOString();
      var order = {
        id: newId(), order_no: generateOrderNo(), user_id: data.user_id,
        direction: data.direction, send_amount: data.send_amount, send_currency: data.send_currency,
        receive_amount: data.receive_amount, receive_currency: data.receive_currency,
        rate: data.rate, fee: data.fee || 0, receive_method: data.receive_method,
        receiver_name: data.receiver_name, receiver_account: data.receiver_account,
        receiver_phone: data.receiver_phone || '', slip_path: data.slip_path || null,
        slip_txn_id: data.slip_txn_id || '', status: 'pending', admin_note: '',
        proof_path: null, created_at: now, updated_at: now, completed_at: null
      };
      db.orders.push(order);
      demoSaveDb(db);
      return order;
    },
    async updateOrderStatus(id, status, opts) {
      await demoEnsureSeeded();
      opts = opts || {};
      var db = demoLoadDb();
      var order = null;
      db.orders.forEach(function (o) { if (o.id === id) order = o; });
      if (!order) throw makeError('not_found', 'Order not found.');
      order.status = status;
      if (opts.admin_note !== undefined) order.admin_note = opts.admin_note;
      if (opts.proof_path !== undefined) order.proof_path = opts.proof_path;
      if (status === 'completed') order.completed_at = new Date().toISOString();
      order.updated_at = new Date().toISOString();
      demoSaveDb(db);
      return order;
    },
    async cancelOrder(id, userId) {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      var order = null;
      db.orders.forEach(function (o) { if (o.id === id) order = o; });
      if (!order || order.user_id !== userId) throw makeError('not_found', 'Order not found.');
      if (order.status !== 'pending') throw makeError('invalid_status', 'Only pending orders can be cancelled.');
      order.status = 'cancelled';
      order.updated_at = new Date().toISOString();
      demoSaveDb(db);
      return order;
    },
    async uploadFile(file, userId, bucket) {
      var path = userId + '/' + Date.now() + '-' + sanitizeFileName(file.name);
      var files = demoLoadFiles();
      files[path] = await fileToDataUrl(file);
      demoSaveFiles(files);
      return path;
    },
    async uploadSlip(file, userId) { return this.uploadFile(file, userId, 'slips'); },
    async uploadProof(file, userId) { return this.uploadFile(file, userId, 'proofs'); },
    async getFileUrl(path) {
      var files = demoLoadFiles();
      return files[path] || null;
    },
    async listUsers() {
      await demoEnsureSeeded();
      return demoLoadDb().profiles.map(demoPublicProfile).sort(function (a, b) { return b.created_at.localeCompare(a.created_at); });
    },
    async setBlocked(userId, blocked) {
      await demoEnsureSeeded();
      var db = demoLoadDb();
      var p = demoFindProfile(db, userId);
      if (!p) throw makeError('not_found', 'User not found.');
      p.is_blocked = !!blocked;
      demoSaveDb(db);
    },
    async getOrderCountsByUser() {
      await demoEnsureSeeded();
      var counts = {};
      demoLoadDb().orders.forEach(function (o) { counts[o.user_id] = (counts[o.user_id] || 0) + 1; });
      return counts;
    },
    async getRateHistory(limit) {
      await demoEnsureSeeded();
      return demoLoadDb().rate_history.slice(0, limit || 14);
    },
    subscribeOrders() { return function () {}; }
  };

  /* ---------------- Supabase backend ---------------- */

  var supabaseClient = null;
  function getClient() {
    if (DEMO) return null;
    if (supabaseClient) return supabaseClient;
    if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
      throw makeError('supabase_cdn_failed', 'Supabase library failed to load. Check the connection and reload.');
    }
    supabaseClient = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
    return supabaseClient;
  }

  function checkError(res, fallbackCode) {
    if (res && res.error) {
      var e = makeError(res.error.code || fallbackCode || 'db_error', res.error.message);
      e.details = res.error;
      throw e;
    }
    return res;
  }

  var cloudBackend = {
    async signUp(email, password, displayName) {
      var client = getClient();
      var res = await client.auth.signUp({
        email: email, password: password,
        options: { data: { display_name: displayName || '' } }
      });
      checkError(res, 'signup_failed');
      var user = res.data && res.data.user;
      // With "Confirm email" OFF (see README), a session exists at once and
      // we can create the profile row immediately. With it ON, the user has
      // no session yet; ensureProfile() on first sign-in creates the row.
      if (user && res.data.session) {
        await client.from('profiles').upsert(
          { id: user.id, email: email, display_name: displayName || '' },
          { onConflict: 'id' }
        );
      }
      return { user: user ? { id: user.id, email: user.email } : null, needsConfirmation: !!(user && !res.data.session) };
    },
    async signIn(email, password) {
      var client = getClient();
      var res = await client.auth.signInWithPassword({ email: email, password: password });
      if (res.error) throw makeError('wrong_password', res.error.message);
      var user = res.data.user;
      var profile = await this.getProfile(user.id);
      if (profile && profile.is_blocked) {
        await client.auth.signOut();
        throw makeError('blocked', 'This account is blocked.');
      }
      return { user: { id: user.id, email: user.email } };
    },
    async signOut() { await getClient().auth.signOut(); },
    async getSession() {
      var res = await getClient().auth.getSession();
      var user = res.data && res.data.session && res.data.session.user;
      return { user: user ? { id: user.id, email: user.email } : null };
    },
    async resetPassword(email) {
      var res = await getClient().auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + window.location.pathname + '#/login'
      });
      checkError(res, 'reset_failed');
    },
    async ensureProfile(user) {
      var client = getClient();
      var existing = await this.getProfile(user.id);
      if (existing) return existing;
      var displayName = (user.user_metadata && user.user_metadata.display_name) || '';
      var res = await client.from('profiles').upsert(
        { id: user.id, email: user.email, display_name: displayName },
        { onConflict: 'id' }
      ).select().single();
      checkError(res, 'profile_failed');
      return res.data;
    },
    async getProfile(userId) {
      var res = await getClient().from('profiles').select('*').eq('id', userId).maybeSingle();
      checkError(res, 'profile_failed');
      return res.data || null;
    },
    async updateProfile(userId, patch) {
      var allowed = {};
      if (patch.display_name !== undefined) allowed.display_name = patch.display_name;
      if (patch.phone !== undefined) allowed.phone = patch.phone;
      if (patch.receivers !== undefined) allowed.receivers = patch.receivers;
      var res = await getClient().from('profiles').update(allowed).eq('id', userId).select().single();
      checkError(res, 'profile_failed');
      return res.data;
    },
    async isAdmin(userId) {
      var res = await getClient().from('admins').select('user_id').eq('user_id', userId).maybeSingle();
      checkError(res, 'admin_check_failed');
      return !!res.data;
    },
    async listAdmins() {
      var client = getClient();
      var res = await client.from('admins').select('user_id, created_at').order('created_at', { ascending: true });
      checkError(res, 'admin_list_failed');
      var rows = res.data || [];
      if (!rows.length) return [];
      var ids = rows.map(function (r) { return r.user_id; });
      var profs = await client.from('profiles').select('id, email, display_name').in('id', ids);
      checkError(profs, 'admin_list_failed');
      var byId = {};
      (profs.data || []).forEach(function (p) { byId[p.id] = p; });
      return rows.map(function (r) {
        var p = byId[r.user_id] || {};
        return { user_id: r.user_id, email: p.email || '', display_name: p.display_name || '', created_at: r.created_at };
      });
    },
    async addAdmin(email) {
      var client = getClient();
      var found = await client.from('profiles').select('id, email, display_name').eq('email', String(email).trim()).maybeSingle();
      checkError(found, 'admin_add_failed');
      if (!found.data) throw makeError('user_not_found', 'No user with that email.');
      var res = await client.from('admins').upsert({ user_id: found.data.id }, { onConflict: 'user_id' }).select().single();
      checkError(res, 'admin_add_failed');
      return { user_id: found.data.id, email: found.data.email, display_name: found.data.display_name };
    },
    async removeAdmin(userId) {
      var res = await getClient().from('admins').delete().eq('user_id', userId);
      checkError(res, 'admin_remove_failed');
    },
    async getSettings() {
      var res = await getClient().from('settings').select('key, value');
      checkError(res, 'settings_failed');
      var out = {};
      (res.data || []).forEach(function (row) { out[row.key] = row.value; });
      return out;
    },
    async updateSettings(key, value) {
      var res = await getClient().from('settings').upsert({ key: key, value: value }, { onConflict: 'key' });
      checkError(res, 'settings_failed');
    },
    async getRates() { return (await this.getSettings()).rates; },
    async setRates(rates, changedBy) {
      await this.updateSettings('rates', rates);
      var res = await getClient().from('rate_history').insert({
        thb_to_mmk: rates.thb_to_mmk, mmk_to_thb: rates.mmk_to_thb, changed_by: changedBy || null
      });
      checkError(res, 'rate_history_failed');
    },
    async listOrders(opts) {
      opts = opts || {};
      var q = getClient().from('orders').select('*').order('created_at', { ascending: false }).limit(200);
      if (!opts.isAdmin && opts.userId) q = q.eq('user_id', opts.userId);
      if (opts.status) q = q.eq('status', opts.status);
      if (opts.search) q = q.ilike('order_no', '%' + opts.search + '%');
      var res = await q;
      checkError(res, 'orders_failed');
      return res.data || [];
    },
    async getOrder(id) {
      var res = await getClient().from('orders').select('*').eq('id', id).maybeSingle();
      checkError(res, 'order_failed');
      return res.data || null;
    },
    async createOrder(data) {
      var payload = {
        order_no: generateOrderNo(), user_id: data.user_id,
        direction: data.direction, send_amount: data.send_amount, send_currency: data.send_currency,
        receive_amount: data.receive_amount, receive_currency: data.receive_currency,
        rate: data.rate, fee: data.fee || 0, receive_method: data.receive_method,
        receiver_name: data.receiver_name, receiver_account: data.receiver_account,
        receiver_phone: data.receiver_phone || '', slip_path: data.slip_path || null,
        slip_txn_id: data.slip_txn_id || '', status: 'pending'
      };
      var res = await getClient().from('orders').insert(payload).select().single();
      checkError(res, 'order_create_failed');
      return res.data;
    },
    async updateOrderStatus(id, status, opts) {
      opts = opts || {};
      var patch = { status: status };
      if (opts.admin_note !== undefined) patch.admin_note = opts.admin_note;
      if (opts.proof_path !== undefined) patch.proof_path = opts.proof_path;
      if (status === 'completed') patch.completed_at = new Date().toISOString();
      var res = await getClient().from('orders').update(patch).eq('id', id).select().single();
      checkError(res, 'order_update_failed');
      return res.data;
    },
    async cancelOrder(id, userId) {
      var res = await getClient().from('orders').update({ status: 'cancelled' })
        .eq('id', id).eq('user_id', userId).eq('status', 'pending').select().single();
      if (res.error) throw makeError('invalid_status', res.error.message);
      return res.data;
    },
    async uploadFile(file, userId, bucket) {
      var path = userId + '/' + Date.now() + '-' + sanitizeFileName(file.name);
      var res = await getClient().storage.from(bucket).upload(path, file, {
        contentType: file.type || 'application/octet-stream', upsert: false
      });
      if (res.error) throw makeError('upload_failed', res.error.message);
      return path;
    },
    async uploadSlip(file, userId) { return this.uploadFile(file, userId, 'slips'); },
    async uploadProof(file, userId) { return this.uploadFile(file, userId, 'proofs'); },
    async getFileUrl(path, bucket) {
      if (!path) return null;
      var res = await getClient().storage.from(bucket || 'slips').createSignedUrl(path, 3600);
      if (res.error) return null;
      return res.data.signedUrl;
    },
    async listUsers() {
      var res = await getClient().from('profiles').select('*').order('created_at', { ascending: false }).limit(200);
      checkError(res, 'users_failed');
      return res.data || [];
    },
    async setBlocked(userId, blocked) {
      var res = await getClient().from('profiles').update({ is_blocked: !!blocked }).eq('id', userId);
      checkError(res, 'block_failed');
    },
    async getOrderCountsByUser() {
      var res = await getClient().from('orders').select('user_id').limit(1000);
      checkError(res, 'orders_failed');
      var counts = {};
      (res.data || []).forEach(function (o) { counts[o.user_id] = (counts[o.user_id] || 0) + 1; });
      return counts;
    },
    async getRateHistory(limit) {
      var res = await getClient().from('rate_history').select('*').order('created_at', { ascending: false }).limit(limit || 14);
      checkError(res, 'rate_history_failed');
      return res.data || [];
    },
    subscribeOrders(callback) {
      var client = getClient();
      var channel = client.channel('orders-changes')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, function () { callback(); })
        .subscribe();
      return function () { client.removeChannel(channel); };
    }
  };

  /* ---------------- facade ---------------- */

  var backend = DEMO ? demoBackend : cloudBackend;
  var api = {
    isDemoMode: DEMO,
    getClient: getClient,
    signUp: function () { return backend.signUp.apply(backend, arguments); },
    signIn: function () { return backend.signIn.apply(backend, arguments); },
    signOut: function () { return backend.signOut.apply(backend, arguments); },
    getSession: function () { return backend.getSession.apply(backend, arguments); },
    resetPassword: function () { return backend.resetPassword.apply(backend, arguments); },
    ensureProfile: function () { return backend.ensureProfile.apply(backend, arguments); },
    getProfile: function () { return backend.getProfile.apply(backend, arguments); },
    updateProfile: function () { return backend.updateProfile.apply(backend, arguments); },
    isAdmin: function () { return backend.isAdmin.apply(backend, arguments); },
    listAdmins: function () { return backend.listAdmins.apply(backend, arguments); },
    addAdmin: function () { return backend.addAdmin.apply(backend, arguments); },
    removeAdmin: function () { return backend.removeAdmin.apply(backend, arguments); },
    getSettings: function () { return backend.getSettings.apply(backend, arguments); },
    updateSettings: function () { return backend.updateSettings.apply(backend, arguments); },
    getRates: function () { return backend.getRates.apply(backend, arguments); },
    setRates: function () { return backend.setRates.apply(backend, arguments); },
    listOrders: function () { return backend.listOrders.apply(backend, arguments); },
    getOrder: function () { return backend.getOrder.apply(backend, arguments); },
    createOrder: function () { return backend.createOrder.apply(backend, arguments); },
    updateOrderStatus: function () { return backend.updateOrderStatus.apply(backend, arguments); },
    cancelOrder: function () { return backend.cancelOrder.apply(backend, arguments); },
    uploadSlip: function () { return backend.uploadSlip.apply(backend, arguments); },
    uploadProof: function () { return backend.uploadProof.apply(backend, arguments); },
    getFileUrl: function () { return backend.getFileUrl.apply(backend, arguments); },
    listUsers: function () { return backend.listUsers.apply(backend, arguments); },
    setBlocked: function () { return backend.setBlocked.apply(backend, arguments); },
    getOrderCountsByUser: function () { return backend.getOrderCountsByUser.apply(backend, arguments); },
    getRateHistory: function () { return backend.getRateHistory.apply(backend, arguments); },
    subscribeOrders: function () { return backend.subscribeOrders.apply(backend, arguments); }
  };

  window.ExchangeStore = api;
})();
