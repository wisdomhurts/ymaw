-- YMAW schema: paste this whole file into the Supabase SQL editor and click Run.
-- (Concatenation of migrations 0001 + 0002 + 0003; safe to run once on a fresh project.
--  Already on 0002? Run only supabase/migrations/0003_media_release.sql.)

-- YMAW registrations + inquiries.
-- RLS is enabled with NO policies on purpose: no anon or authenticated access
-- at all. Only the service role key (used by the Vercel functions) can read
-- or write. The admin view is the Supabase table editor.
create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  ref text unique not null,
  created_at timestamptz not null default now(),
  event text not null default 'fall-2026',

  parent_name text not null,
  parent_email text not null,
  parent_phone text not null,

  son_first text not null,
  son_last text not null,
  son_age int not null check (son_age between 12 and 17),

  emergency_name text not null,
  emergency_phone text not null,
  medical_notes text,

  consent_waiver boolean not null default false,
  waiver_version text not null default 'v2026-1',
  consented_at timestamptz,
  photo_consent boolean not null default false,

  payment_method text not null check (payment_method in ('card','etransfer','aid')),
  payment_status text not null default 'pending'
    check (payment_status in ('pending','paid','aid_requested','waived','refunded','cancelled')),
  amount_cents int not null default 27900,
  currency text not null default 'CAD',
  stripe_session_id text,
  stripe_payment_intent text,
  paid_at timestamptz,

  notes text
);
alter table public.registrations enable row level security;

create index if not exists registrations_event_idx on public.registrations (event, payment_status);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kind text not null default 'question' check (kind in ('volunteer','question','aid')),
  name text not null,
  email text not null,
  message text,
  handled boolean not null default false
);
alter table public.inquiries enable row level security;

-- Three registrant types (young_man, sponsor, production), everyone pays the
-- same per-person amount; sponsors carry a headcount. The parent_* columns
-- now hold the registering contact for every type; son_* and emergency_*
-- are filled only for young_man rows, so they become nullable.
alter table public.registrations
  add column if not exists registrant_type text not null default 'young_man'
    check (registrant_type in ('young_man','sponsor','production')),
  add column if not exists headcount int not null default 1 check (headcount between 1 and 20),
  add column if not exists details jsonb not null default '{}'::jsonb;

alter table public.registrations
  alter column son_first drop not null,
  alter column son_last drop not null,
  alter column son_age drop not null,
  alter column emergency_name drop not null,
  alter column emergency_phone drop not null;

alter table public.registrations alter column amount_cents set default 32000;
alter table public.registrations alter column event set default 'ymaw-2026';

create index if not exists registrations_type_idx on public.registrations (event, registrant_type);

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
