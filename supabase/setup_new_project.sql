-- =============================================================================
-- Bootstrap a fresh Supabase project for this app.
--
-- Newsletter signup capture. The send-side dedupe log lives in
-- migrations/004_newsletter_sends.sql; run that too on a brand-new project.
--
-- The referral/profiles half of this file was removed when the referral feature
-- was retired — see migrations/005_drop_referral.sql.
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

COMMENT ON TABLE public.newsletter_subscribers IS 'Newsletter email signups captured from the report pages.';
COMMENT ON COLUMN public.newsletter_subscribers.source IS 'Signup host + path, e.g. n1dv.io/insights — sendNewsletter.ts routes by host.';
