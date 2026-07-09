-- =============================================================================
-- Newsletter send log: one row per report that has been emailed to subscribers.
-- Prevents duplicate sends. Written only by the service-role key (CI); RLS is
-- enabled with no policies, so the public anon key can neither read nor write.
-- Run this in Supabase SQL Editor.
-- =============================================================================

CREATE TABLE IF NOT EXISTS public.newsletter_sends (
  report_id text PRIMARY KEY,
  recipient_count integer NOT NULL DEFAULT 0,
  sent_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_sends ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE public.newsletter_sends IS 'Reports already emailed to newsletter subscribers (dedupe log, service-role only).';
