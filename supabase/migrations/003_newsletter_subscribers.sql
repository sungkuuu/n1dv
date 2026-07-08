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
