-- =============================================================================
-- Retire the referral feature: drop public.profiles.
--
-- The feature is not carried forward to quadrix.finance or nexusonecap.com, so
-- rather than repairing its RLS (001/002 left anon with blanket
-- SELECT/INSERT/UPDATE via USING (true), readable by anyone holding the anon key
-- that ships in the frontend bundle) the table goes away entirely. No table, no
-- exposure.
--
-- The frontend no longer references it as of this commit — the referral lib,
-- hook, drawer, page and /referral route were removed in the same change.
--
-- ---------------------------------------------------------------------------
-- THIS IS IRREVERSIBLE. Export first if the rows have any value:
--
--   Dashboard → Table Editor → profiles → Export → CSV
--
-- or, to see what you would be discarding before you decide:
--
--   select count(*) from public.profiles;
--   select count(*) from public.profiles where referred_by is not null;
--
-- ---------------------------------------------------------------------------
-- Does NOT touch newsletter_subscribers or newsletter_sends. Those stay: the
-- same Supabase project serves nexusonecap.com's newsletter, and
-- scripts/sendNewsletter.ts routes subscribers by signup host.
--
-- Run in the Supabase SQL Editor.
-- =============================================================================

-- The self-referencing FK (referred_by → my_referral_code) is internal to this
-- table, so CASCADE only reaches the table's own constraints, indexes and
-- trigger. Nothing else in the schema depends on profiles.
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Trigger function that existed only to stamp profiles.updated_at. The
-- newsletter tables have no updated_at column and no triggers, so this is now
-- orphaned.
DROP FUNCTION IF EXISTS public.set_updated_at();

-- citext was enabled by 001 solely for case-insensitive referral codes. Left in
-- place deliberately: dropping an extension is riskier than leaving an unused
-- one, and it costs nothing. To remove it anyway, confirm nothing else uses the
-- type first:
--   select 1 from pg_attribute a join pg_type t on t.oid = a.atttypid
--    where t.typname = 'citext' and a.attnum > 0 limit 1;
-- and then: DROP EXTENSION IF EXISTS citext;
