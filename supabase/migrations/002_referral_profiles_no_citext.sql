-- =============================================================================
-- Alternative: profiles table without citext (use if 001 fails due to citext)
-- Same schema but my_referral_code and referred_by are text; handle case in app.
-- =============================================================================

CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_address text NOT NULL,
  my_referral_code text NOT NULL,
  referred_by text NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT profiles_wallet_address_key UNIQUE (wallet_address),
  CONSTRAINT profiles_my_referral_code_key UNIQUE (my_referral_code),
  CONSTRAINT profiles_referred_by_fkey FOREIGN KEY (referred_by)
    REFERENCES public.profiles (my_referral_code)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_profiles_wallet_address ON public.profiles (wallet_address);
CREATE INDEX IF NOT EXISTS idx_profiles_my_referral_code ON public.profiles (my_referral_code);
CREATE INDEX IF NOT EXISTS idx_profiles_referred_by ON public.profiles (referred_by);

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

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert for referral signup"
  ON public.profiles FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Allow read for referral validation and profile fetch"
  ON public.profiles FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow update for profile"
  ON public.profiles FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

COMMENT ON TABLE public.profiles IS 'Web3 referral profiles: wallet_address, my_referral_code (6-char), referred_by (inviter code).';
