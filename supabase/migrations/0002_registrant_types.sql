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
