-- Media release (release-2026-1) is now part of registration for every
-- registrant type (young_man, sponsor, production). Granting is voluntary;
-- choosing and signing are required, and api/register.js dates the signature.
-- Additive: existing rows keep nulls. The legacy photo_consent column stays
-- and is written in sync (= media_release_granted) so older exports and the
-- Sheet mirror keep working.
alter table public.registrations
  add column if not exists media_release_granted boolean,
  add column if not exists media_release_signed_name text,
  add column if not exists media_release_signed_at timestamptz,
  add column if not exists media_release_version text;
