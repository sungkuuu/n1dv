-- =============================================================================
-- Web3 Referral System: profiles table
-- Stores wallet_address, my_referral_code (issued), referred_by (inviter's code)
-- Run this in Supabase SQL Editor or via supabase db push.
--
-- If your project does not have the citext extension, use the alternative
-- migration 002_referral_profiles_no_citext.sql instead (uses text + app-side case handling).
-- =============================================================================

-- Case-insensitive text for referral codes. Skip if your Supabase project disallows it:
CREATE EXTENSION IF NOT EXISTS citext;

-- Drop existing table if re-running (optional; remove in production)
-- DROP TABLE IF EXISTS public.profiles;

CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_address text NOT NULL,
  my_referral_code citext NOT NULL,
  referred_by citext NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT profiles_wallet_address_key UNIQUE (wallet_address),
  CONSTRAINT profiles_my_referral_code_key UNIQUE (my_referral_code),
  CONSTRAINT profiles_referred_by_fkey FOREIGN KEY (referred_by)
    REFERENCES public.profiles (my_referral_code)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

-- Index for lookups by wallet (sign-in / session)
CREATE INDEX IF NOT EXISTS idx_profiles_wallet_address ON public.profiles (wallet_address);

-- Index for referral code validation and referred_by lookups
CREATE INDEX IF NOT EXISTS idx_profiles_my_referral_code ON public.profiles (my_referral_code);
CREATE INDEX IF NOT EXISTS idx_profiles_referred_by ON public.profiles (referred_by);

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS set_profiles_updated_at ON public.profiles;
CREATE TRIGGER set_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- RLS: enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy: allow anonymous insert (wallet connect = sign up)
-- Frontend will send wallet_address and optional invite code; backend/service validates.
CREATE POLICY "Allow insert for referral signup"
  ON public.profiles
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: allow read for referral code validation (check if code exists) and for users to read their own profile
-- Restricting to "own row only" would require auth by wallet (e.g. SIWE); here we allow read for any row so the app can validate codes and fetch by wallet server-side or via filtered query.
CREATE POLICY "Allow read for referral validation and profile fetch"
  ON public.profiles
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: allow update only for own row (by wallet_address)
-- Supabase does not provide wallet in JWT by default; if you add SIWE later you can restrict. For now we allow update so that referred_by can be set on first signup when invite code is provided (we do upsert in app).
CREATE POLICY "Allow update for profile"
  ON public.profiles
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Optional: comment for documentation
COMMENT ON TABLE public.profiles IS 'Web3 referral profiles: wallet_address, my_referral_code (6-char), referred_by (inviter code).';
COMMENT ON COLUMN public.profiles.wallet_address IS 'Ethereum or other chain wallet address (checksummed recommended).';
COMMENT ON COLUMN public.profiles.my_referral_code IS 'Unique 6-character alphanumeric code issued to this user for sharing.';
COMMENT ON COLUMN public.profiles.referred_by IS 'Referral code of the user who invited this user, if any.';
-- =============================================================================
-- Newsletter subscribers: email capture from report pages
-- Run this in Supabase SQL Editor (same as 001/002).
-- =============================================================================

CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  -- where the signup happened, e.g. report slug or 'insights'
  source text NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- One row per email, case-insensitive
CREATE UNIQUE INDEX IF NOT EXISTS idx_newsletter_subscribers_email
  ON public.newsletter_subscribers (lower(email));

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Anyone may subscribe (insert). No select/update/delete policies:
-- the anon key can WRITE emails but never READ the list back.
CREATE POLICY "Allow anonymous newsletter signup"
  ON public.newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

COMMENT ON TABLE public.newsletter_subscribers IS 'Newsletter email signups captured from n1dv.io report pages.';
COMMENT ON COLUMN public.newsletter_subscribers.source IS 'Report slug or page where the signup form was submitted.';
