# Baht-Kyat Exchange (ဘတ်-ကျပ် ငွေလဲ)

A Burmese-language THB/MMK exchange website with a **user dashboard** and an
**admin panel**. Static front end, no build step. Free hosting only
(Vercel + Supabase free tiers, no card needed).

**How money moves:** the website never moves money. Customers send THB/MMK
with their own bank/wallet apps, upload the slip photo here, and the shop
owner (admin) checks the slip and sends the other currency, then uploads
proof. The website handles rates, orders, slip uploads, tracking, and
admin approval — the same manual-approval flow as the Telegram ads bot's
KBZPay redeem.

## What is included

| Area | Features |
|---|---|
| Home (no login) | Live rate card (both directions), calculator with fee + net amount, 3-step how-it-works, shop open/closed + announcement |
| User dashboard | Pending / completed / total order counts, recent orders |
| New order (3 steps) | Direction + amounts with live quote and min/max checks → payment instructions (accounts + QR) → receiver details + slip upload (client-side compression) + transaction ID. The rate is **locked** at order creation. |
| Orders | Status filter, order-number search, detail page with timeline, slip view, admin proof, admin note, cancel while pending |
| Profile | Name/phone edit, saved receivers, password reset (cloud mode) |
| Admin Overview | Today's volume, pending count, completed today, fees collected, recent orders, Realtime updates + 20s polling fallback |
| Admin Orders | Queue with status filter + search, slip zoom, mark reviewing, upload proof + complete, reject with reason, one-tap copy of receiver info |
| Admin Rates | Edit both rates + fee + min/max limits, rate-change history (last 14) |
| Admin Users | Search, block/unblock, order counts |
| Admin Settings | Payment accounts for THB + MMK (label, account name/number, QR image URL, enable/disable), shop info + announcement + open/closed, admin management |
| Admin Ledger | Volumes by direction, fees by currency, counts by status, date range (today / 7 / 30 / all). Volumes and fees only — no invented profit math. |

Phone-first design: user views are max 480px centered with a bottom nav;
admin tables collapse to cards on phones. Theme is blue + amber. No green
is used as a primary or status color (owner preference).

## Demo mode (before Supabase is connected)

While `js/config.js` has empty `SUPABASE_URL` / `SUPABASE_ANON_KEY`, the app
runs entirely on `localStorage` seed data and shows a persistent amber
**demo-mode banner** on every view. Demo logins (visible buttons on the
login page):

- Admin: `admin@demo.local` / `demo1234`
- User: `demo1@demo.local` / `demo1234`

Demo passwords are SHA-256 hashed (SubtleCrypto) and the seed includes 4
orders across statuses. Demo mode is **not secure** and must never be used
with real money or real customer data — it is for trying the UI only.

## Setup checklist (going live)

### 1. Create the Supabase project

1. Go to [supabase.com](https://supabase.com) and create a free project.
   Choose region **Singapore** (closest to Thailand/Myanmar).
2. Wait for the project to finish provisioning.

### 2. Run the database schema

1. Supabase Dashboard → **SQL Editor** → **New query**.
2. Paste the full contents of `supabase/schema.sql` and press **Run**.
3. The script is idempotent (safe to re-run). It creates the tables,
   enables RLS on every table, seeds default settings, and creates the
   private `slips` and `proofs` storage buckets with access policies.

If the bucket-creation lines fail in your project, create the buckets by
hand in Dashboard → **Storage** (names `slips` and `proofs`, **private**,
not public) and re-run the storage-policy section of the script.

### 3. Turn OFF email confirmation

Dashboard → **Authentication** → **Providers** → **Email** → turn **OFF**
"Confirm email". Phone users must be able to log in immediately after
registering; with confirmation ON they would be stuck waiting for an email.

### 4. Fill in `js/config.js`

Dashboard → **Project Settings** → **API**, then copy:

- **Project URL** → `SUPABASE_URL`
- **anon / public key** → `SUPABASE_ANON_KEY`

The anon key is safe to ship in a static site — row-level security is what
protects the data. **Never** put the `service_role` key in this file.

As soon as both values are filled, the app automatically stops using demo
mode (the banner disappears).

### 5. Deploy to Vercel (static site)

1. Push this folder to a GitHub repo (or drag-and-drop the folder into
   Vercel).
2. In Vercel: **Add New → Project** → import the repo. Framework preset:
   **Other**. No build command, no output directory change — the site is
   served as-is from the repo root (`index.html`).
3. Deploy. No environment variables are needed.

### 6. First admin sign-up

1. Open the live site and **register** with the seed admin email
   (`testme900001@gmail.com` by default — see below).
2. A trigger grants that account admin rights automatically on sign-up.
3. Log in, open **Admin → Rates**, and **confirm or edit the rates** before
   taking any real order (see "Rates" below).
4. In **Admin → Settings**, add your real payment accounts (PromptPay /
   KBZPay / WavePay / banks) so customers see where to pay. Until accounts
   are configured, the order flow shows a "contact the shop" message.

## Changing the seed admin email

The default seed admin is `testme900001@gmail.com`, set in two places:

1. `supabase/schema.sql` — the `INSERT INTO public.seed_admins` line. Change
   it **before** running the script, or afterwards run in the SQL Editor:
   ```sql
   delete from public.seed_admins;
   insert into public.seed_admins (email) values ('you@example.com');
   ```
2. If the old account already signed up and became admin, remove it in
   **Admin → Settings → Admins**, or in the SQL Editor:
   ```sql
   delete from public.admins where user_id in
     (select id from public.profiles where email = 'testme900001@gmail.com');
   ```

Additional admins can be added any time in **Admin → Settings → Admins** by
the email of an already-registered user. Admin membership lives only in the
`admins` table — there is no `is_admin` column on profiles.

## Rates — read before going live

- Rates are **manual**: the admin sets them in Admin → Rates. There is no
  automatic market feed in v1.
- The seeded starting rates (`thb_to_mmk: 141.85`, `mmk_to_thb: 146.41`)
  are grounded in Facebook shop posts from Nov 12–15, 2026. They are
  starting values, **not** live data. The admin **must** confirm or edit
  them before going live, and re-check them regularly.
- `thb_to_mmk` = MMK a customer receives for 1 THB.
  `mmk_to_thb` = MMK a customer pays for 1 THB.
- Every rate change is written to `rate_history` (shown in Admin → Rates).
- An order's rate is locked at creation; later rate changes never rewrite
  existing orders.

### Fee math

```
THB → MMK:  gross = send_THB × thb_to_mmk        (MMK)
MMK → THB:  gross = send_MMK ÷ mmk_to_thb        (THB)
fee  = gross × fee_percent ÷ 100                  (in the RECEIVE currency)
net  = gross − fee                                (what the customer receives)
```

MMK amounts round to whole kyat; THB rounds to 2 decimal places. The
default `fee_percent` is 0 (profit from the rate spread only).

## File map

```
index.html            Shell: header, view container, bottom nav, CDN scripts
css/style.css         All styles (blue + amber, phone-first, no green)
js/config.js          Supabase URL + anon key (EMPTY placeholders until setup)
js/store.js           One async data interface; Supabase backend + localStorage
                      demo backend behind it. No UI strings in this file.
js/app.js             All views + hash routing. ALL Burmese UI strings live in
                      the single STRINGS object at the top of this file.
supabase/schema.sql   Idempotent schema: tables, RLS, triggers, seeds, storage
README.md             This file
.gitignore            OS/editor/dependency noise (config.js is committable:
                      it holds placeholders, never real keys)
```

## Security notes

- RLS is enabled on every table. Users can only read/update their own
  orders and profile; settings are public-read (shop config, no secrets);
  rate history requires login; admin writes require admin membership.
- Slip/proof images live in **private** buckets and are viewed through
  1-hour signed URLs. Users can only access files in their own folder.
- All user-supplied content is escaped before rendering (`esc()` in
  `js/app.js`); user data is never injected into `innerHTML` unescaped.
- Blocked users cannot sign in. Admins cannot remove themselves or block
  themselves from the panel.
- Burmese text is Myanmar Unicode throughout, rendered with Noto Sans
  Myanmar from Google Fonts. All UI strings are in the `STRINGS` object in
  `js/app.js` — verify codepoints against a trusted source before changing
  any of them; never "fix" working Burmese text by retyping it.

## Known limitations (v1)

- Order lists are capped at the latest 200 rows (Supabase query limit), so
  the Ledger and Admin Overview reflect at most the latest 200 orders.
- No automatic exchange-rate feed; no bank/wallet API integration — all
  money movement and slip verification are manual by design.
- No push notifications. Admins get live updates while the admin panel is
  open (Realtime + polling); a Telegram alert for new orders is a possible
  follow-up.
- Password reset uses Supabase email reset links (cloud mode only).
- QR codes for payment accounts are image URLs supplied by the admin; the
  app does not generate QR codes.
```

