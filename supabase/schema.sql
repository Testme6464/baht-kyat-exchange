-- =====================================================================
-- Baht-Kyat Exchange — Supabase schema (idempotent: safe to re-run)
--
-- How to use: Supabase Dashboard > SQL Editor > paste this file > Run.
-- Re-running never overwrites admin-edited settings: seed rows use
-- ON CONFLICT DO NOTHING.
--
-- Tables: profiles, admins, seed_admins, settings, orders, rate_history.
-- Row Level Security (RLS) is enabled on every table.
-- Storage buckets `slips` and `proofs` are created PRIVATE below, with
-- policies so users can only read/upload inside their own <user_id>/
-- folder, while admins can read everything.
-- =====================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ---------------------------------------------------------------------
-- Helper: is the given user an admin? SECURITY DEFINER so RLS policies
-- can call it without recursing into the `admins` table policies.
-- LANGUAGE plpgsql (NOT sql) on purpose: a SQL-language body is validated
-- at CREATE time, so it would fail with 'relation "public.admins" does
-- not exist' because this function is defined before the admins table.
-- plpgsql defers validation to first execution, when the table exists.
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_admin(uid uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (SELECT 1 FROM public.admins WHERE user_id = uid);
END;
$$;

-- ---------------------------------------------------------------------
-- Helper: keep updated_at fresh.
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- ---------------------------------------------------------------------
-- profiles: one row per auth user. Created by the app after sign-up /
-- first sign-in (see store.ensureProfile). `receivers` holds the user's
-- saved receivers: [{method, name, account, phone}].
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  email text NOT NULL,
  display_name text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  receivers jsonb NOT NULL DEFAULT '[]'::jsonb,
  is_blocked boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "profiles select own or admin" ON public.profiles;
CREATE POLICY "profiles select own or admin" ON public.profiles
  FOR SELECT USING (auth.uid() = id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "profiles insert own" ON public.profiles;
CREATE POLICY "profiles insert own" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "profiles update own or admin" ON public.profiles;
CREATE POLICY "profiles update own or admin" ON public.profiles
  FOR UPDATE USING (auth.uid() = id OR public.is_admin(auth.uid()))
  WITH CHECK (auth.uid() = id OR public.is_admin(auth.uid()));
-- NOTE: the app only ever sends display_name/phone/receivers for a user's
-- own row. is_blocked is enforced by the trigger below: an authenticated
-- non-admin cannot change it even with a direct API call (so a blocked
-- user cannot unblock themself). There is no DELETE policy: rows are
-- removed automatically when the auth user is deleted (CASCADE).

-- Trigger: only admins may change is_blocked. Requests without a JWT
-- (auth.uid() IS NULL, e.g. SQL run in the dashboard) are left alone.
CREATE OR REPLACE FUNCTION public.protect_blocked_flag()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF OLD.is_blocked IS DISTINCT FROM NEW.is_blocked
     AND auth.uid() IS NOT NULL
     AND NOT public.is_admin(auth.uid()) THEN
    RAISE EXCEPTION 'only admins can change is_blocked';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_blocked_flag ON public.profiles;
CREATE TRIGGER trg_protect_blocked_flag
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_blocked_flag();

-- ---------------------------------------------------------------------
-- admins: admin membership lives ONLY here (no is_admin column on
-- profiles). Granted via the seed trigger below or the admin panel.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.admins (
  user_id uuid PRIMARY KEY REFERENCES public.profiles (id) ON DELETE CASCADE,
  granted_by uuid REFERENCES public.profiles (id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "admins select own or admin" ON public.admins;
CREATE POLICY "admins select own or admin" ON public.admins
  FOR SELECT USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "admins insert admin only" ON public.admins;
CREATE POLICY "admins insert admin only" ON public.admins
  FOR INSERT WITH CHECK (public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "admins delete admin only" ON public.admins;
CREATE POLICY "admins delete admin only" ON public.admins
  FOR DELETE USING (public.is_admin(auth.uid()));

-- ---------------------------------------------------------------------
-- seed_admins: emails that become admins automatically the first time
-- they sign up. Change the email below BEFORE going live if the shop
-- owner's account is different (see README.md).
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.seed_admins (
  email text PRIMARY KEY
);
ALTER TABLE public.seed_admins ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "seed_admins admin only" ON public.seed_admins;
CREATE POLICY "seed_admins admin only" ON public.seed_admins
  FOR ALL USING (public.is_admin(auth.uid()))
  WITH CHECK (public.is_admin(auth.uid()));

INSERT INTO public.seed_admins (email) VALUES ('testme900001@gmail.com')
ON CONFLICT (email) DO NOTHING;

-- Trigger: when a profile is created with a seeded email, grant admin.
-- SECURITY DEFINER: runs as table owner, bypassing RLS on admins/seed_admins.
CREATE OR REPLACE FUNCTION public.fn_grant_seeded_admin()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.seed_admins WHERE lower(email) = lower(NEW.email)) THEN
    INSERT INTO public.admins (user_id) VALUES (NEW.id)
    ON CONFLICT (user_id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_grant_seeded_admin ON public.profiles;
CREATE TRIGGER trg_grant_seeded_admin
  AFTER INSERT ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.fn_grant_seeded_admin();

-- ---------------------------------------------------------------------
-- settings: public shop configuration (no secrets may live here).
-- Keys: rates, fees, payments_thb, payments_mmk, shop.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "settings select public" ON public.settings;
CREATE POLICY "settings select public" ON public.settings
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "settings write admin only" ON public.settings;
CREATE POLICY "settings write admin only" ON public.settings
  FOR ALL USING (public.is_admin(auth.uid()))
  WITH CHECK (public.is_admin(auth.uid()));

DROP TRIGGER IF EXISTS trg_settings_updated_at ON public.settings;
CREATE TRIGGER trg_settings_updated_at
  BEFORE UPDATE ON public.settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Seed settings. Rates are grounded in Nov 12-15, 2026 Facebook shop
-- posts (THB->MMK ~141.85, MMK->THB ~146.41). The admin MUST confirm or
-- edit them before going live — they are starting values, not live data.
INSERT INTO public.settings (key, value) VALUES
  ('rates', '{"thb_to_mmk": 141.85, "mmk_to_thb": 146.41}'::jsonb),
  ('fees', '{"fee_percent": 0, "min_thb": 100, "max_thb": 50000, "min_mmk": 10000, "max_mmk": 5000000}'::jsonb),
  ('payments_thb', '{"methods": []}'::jsonb),
  ('payments_mmk', '{"methods": []}'::jsonb),
  ('shop', '{"name": "ဘတ်-ကျပ် ငွေလဲ", "announcement": "", "is_open": true, "open_hours": "", "contact_telegram": "", "contact_phone": ""}'::jsonb)
ON CONFLICT (key) DO NOTHING;
-- Payment method shape: {id, label, account_name, account_number,
-- qr_image_url, enabled}. Managed in Admin > Settings.

-- ---------------------------------------------------------------------
-- orders: one row per exchange request. The rate is LOCKED at creation
-- (copied from settings into `rate`); later rate changes never rewrite
-- existing orders. Money moves OUTSIDE this app; `slip_path` /
-- `proof_path` are private Storage paths, not public URLs.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_no text NOT NULL,
  user_id uuid NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  direction text NOT NULL CHECK (direction IN ('THB_TO_MMK', 'MMK_TO_THB')),
  send_amount numeric NOT NULL CHECK (send_amount > 0),
  send_currency text NOT NULL,
  receive_amount numeric NOT NULL,
  receive_currency text NOT NULL,
  rate numeric NOT NULL,
  fee numeric NOT NULL DEFAULT 0,
  receive_method text NOT NULL DEFAULT '',
  receiver_name text NOT NULL DEFAULT '',
  receiver_account text NOT NULL DEFAULT '',
  receiver_phone text NOT NULL DEFAULT '',
  slip_path text,
  slip_txn_id text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'reviewing', 'completed', 'rejected', 'cancelled')),
  admin_note text NOT NULL DEFAULT '',
  proof_path text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);
CREATE INDEX IF NOT EXISTS idx_orders_user_created ON public.orders (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_status_created ON public.orders (status, created_at DESC);
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

DROP TRIGGER IF EXISTS trg_orders_updated_at ON public.orders;
CREATE TRIGGER trg_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP POLICY IF EXISTS "orders select own or admin" ON public.orders;
CREATE POLICY "orders select own or admin" ON public.orders
  FOR SELECT USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "orders insert own pending" ON public.orders;
CREATE POLICY "orders insert own pending" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = user_id AND status = 'pending');

DROP POLICY IF EXISTS "orders update admin or own cancel" ON public.orders;
CREATE POLICY "orders update admin or own cancel" ON public.orders
  FOR UPDATE USING (
    public.is_admin(auth.uid())
    OR (auth.uid() = user_id AND status = 'pending')
  )
  WITH CHECK (
    public.is_admin(auth.uid())
    OR (auth.uid() = user_id AND status = 'cancelled')
  );
-- No DELETE policy: orders are never deleted, only cancelled/rejected.

-- ---------------------------------------------------------------------
-- rate_history: append-only log of admin rate changes.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.rate_history (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  thb_to_mmk numeric NOT NULL,
  mmk_to_thb numeric NOT NULL,
  changed_by uuid REFERENCES public.profiles (id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.rate_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "rate_history select authenticated" ON public.rate_history;
DROP POLICY IF EXISTS "rate_history select public" ON public.rate_history;
-- Public read: rate history is public shop info (rates + timestamps only),
-- and the logged-out home page shows the last-updated time from it.
CREATE POLICY "rate_history select public" ON public.rate_history
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "rate_history insert admin only" ON public.rate_history;
CREATE POLICY "rate_history insert admin only" ON public.rate_history
  FOR INSERT WITH CHECK (public.is_admin(auth.uid()));

-- ---------------------------------------------------------------------
-- Storage: private buckets. (Policies are created in the Dashboard, NOT
-- here — see below.)
-- Files are stored as <user_id>/<timestamp>-<filename>. Users may
-- upload/read only inside their own folder; admins may read all.
-- Proofs are uploaded by the admin into the ORDER OWNER's folder (see
-- app.js) so the customer can view them; admins may upload into any
-- folder. Reads go through signed URLs (see store.getFileUrl).
-- If the INSERTs below fail in your project, create the buckets by hand
-- in Dashboard > Storage (private, NOT public).
-- ---------------------------------------------------------------------
INSERT INTO storage.buckets (id, name, public)
VALUES ('slips', 'slips', false), ('proofs', 'proofs', false)
ON CONFLICT (id) DO NOTHING;

-- ---------------------------------------------------------------------
-- Storage RLS policies — CREATE THESE IN THE DASHBOARD UI, NOT IN SQL.
-- Why: on this project the SQL Editor role is not the owner of
-- storage.objects, so ALTER TABLE / CREATE POLICY on it fails with
-- ERROR 42501 ("must be owner of table objects") and rolls the whole
-- script back. RLS is already enabled on storage.objects by Supabase.
-- Do NOT re-add ALTER/CREATE POLICY statements for storage.objects here.
--
-- Dashboard > Storage > Policies: create these 2 policies (each covers
-- BOTH buckets via the bucket_id check; create once, from either
-- bucket's policy page, using full-custom expressions — if the UI
-- forces a per-bucket scope, create the same pair for each bucket with
-- bucket_id = 'slips' / bucket_id = 'proofs' respectively):
--
-- 1) Name: slips proofs select own or admin | Operation: SELECT
--    USING expression:
--    bucket_id IN ('slips', 'proofs')
--    AND ((storage.foldername(name))[1] = auth.uid()::text
--         OR public.is_admin(auth.uid()))
-- 2) Name: slips proofs insert own folder or admin | Operation: INSERT
--    WITH CHECK expression:
--    bucket_id IN ('slips', 'proofs')
--    AND ((storage.foldername(name))[1] = auth.uid()::text
--         OR public.is_admin(auth.uid()))
-- No UPDATE/DELETE policies: files are immutable.
-- Without these 2 policies, RLS denies ALL file access (even owners),
-- so slip/proof viewing breaks. Verify in Storage > Policies after setup.
-- ---------------------------------------------------------------------

-- ---------------------------------------------------------------------
-- Realtime: publish order changes so the admin panel updates live.
-- (The app also polls every 20s as a fallback.)
-- ---------------------------------------------------------------------
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND tablename = 'orders'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.orders;
  END IF;
END $$;
