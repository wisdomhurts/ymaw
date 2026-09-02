# Go-live checklist: card payments, database, media release, Sheet

Everything below is done once. The site runs honestly without any of it
(registrations answer `demo: true` and store nothing), so nothing breaks while
you work through the list. After changing any Vercel env var, **redeploy** —
functions only pick up env vars at build time.

## 1. Vercel env vars (Project → Settings → Environment Variables)

| Name | Where it comes from |
| --- | --- |
| `SUPABASE_URL` | Supabase → project `ymaw` → Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Same page → Project API keys → `service_role` (secret; server-side only, never in the browser) |
| `STRIPE_SECRET_KEY` | Stripe → Developers → API keys → Secret key. Use the `sk_test_…` key for the test run in section 5, then swap in the `sk_live_…` key |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Developers → Webhooks → the endpoint you add in section 2 → Signing secret (`whsec_…`). Test mode and live mode have different endpoints and different secrets; swap this together with the secret key |
| `PUBLIC_SITE_URL` | `https://ymaw.com` once DNS points at Vercel. Until then leave it **unset**: Stripe's success and cancel redirects then use whatever host the request came in on |
| `SHEETS_WEBHOOK_URL` | Optional. The Apps Script web-app URL from section 4. Leave unset to skip the Google Sheet mirror |

## 2. Stripe webhook

Stripe → Developers → Webhooks → Add endpoint:

- Endpoint URL: `https://ymaw.com/api/stripe-webhook` (or `https://ymaw.vercel.app/api/stripe-webhook` until DNS lands)
- Events to send:
  - `checkout.session.completed` — card payments are marked `paid` from this
  - `checkout.session.async_payment_succeeded` — only matters if a delayed payment method is ever turned on
  - `checkout.session.async_payment_failed` — logged; the row stays `pending` for follow-up
- Copy the signing secret into `STRIPE_WEBHOOK_SECRET`.

Also in Stripe → Settings → Customer emails, turn on **Successful payments**.
The success page tells the parent a receipt is coming from Stripe; this is the
switch that makes that true.

The price is fixed in code at $320 CAD per person (`PRICE_CENTS = 32000` in
`api/register.js`); sponsors are charged 1 + the number of young men listed.
Nothing about pricing is configured in the Stripe dashboard.

## 3. Supabase migration

Supabase → SQL editor → paste and run **`supabase/migrations/0003_media_release.sql`**.
It only adds columns (`media_release_granted`, `media_release_signed_name`,
`media_release_signed_at`, `media_release_version`), so it is safe on a table
with rows in it. The old `photo_consent` column stays and is written in sync.

A brand-new project instead runs `supabase/schema.sql` once (it contains
migrations 0001, 0002 and 0003).

## 4. Google Sheet mirror (optional)

1. Make a blank Google Sheet named "YMAW 2026 Registrations".
2. Extensions → Apps Script → replace the contents with `scripts/sheets-sync.gs` → Save.
3. Deploy → New deployment → type **Web app** → Execute as **Me** → Who has access **Anyone** → Deploy. Approve the permissions prompt.
4. Copy the web-app URL into Vercel as `SHEETS_WEBHOOK_URL` and redeploy.

The Sheet gets one row per registration (ref, type, names, ages, pickup,
contact, payment method and status, amount, headcount, media release), updated
in place when a card payment lands. Medical notes, emergency contacts and the
typed signature are never sent to it; they live in Supabase only.

## 5. Live test, six steps

Do this first with the `sk_test_…` key and a test-mode webhook endpoint, then
repeat step 1 after swapping to the live keys (a real card; refund it in Stripe
afterwards).

1. **Card.** Register a young man, grant the release, sign, choose *Pay by card now*. In Stripe Checkout use card `4242 4242 4242 4242`, any future expiry, any CVC. Confirm the amount is **$320.00 CAD**, and that the site lands on `/success.html` reading "He's on the list."
2. **Row flips to paid.** Supabase → Table editor → `registrations`: the new row has `payment_status = paid`, `paid_at` set and `stripe_payment_intent` filled. If it is still `pending`, look at Stripe → Webhooks → the endpoint → recent deliveries for the error.
3. **e-Transfer path.** Register again choosing *Interac e-Transfer*. The success page shows the total and the reference; the row is `payment_method = etransfer`, `payment_status = pending`. Mark it `paid` by hand later when the transfer arrives.
4. **Assistance path.** Register a third time choosing *Request financial assistance*. The row is `payment_status = aid_requested`; nothing was charged.
5. **Release fields.** On each of the three rows check `media_release_granted` (true/false as chosen), `media_release_signed_name` (the typed name), `media_release_signed_at` (set) and `media_release_version = release-2026-1`; `photo_consent` matches `media_release_granted`. Try once more declining the release: registration still goes through. Try leaving the choice or the signature empty: step 3 refuses to continue.
6. **Sheet row.** If `SHEETS_WEBHOOK_URL` is set, each registration appears in the Sheet within a few seconds, and the card row's *Payment status* reads `paid`.

Delete the test rows in Supabase (and the test rows in the Sheet) before the
first real registration, or leave them and filter on `event`.
