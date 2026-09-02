// POST /api/stripe-webhook - Stripe calls this; we mark registrations paid.
//
// Stripe dashboard -> Developers -> Webhooks -> Add endpoint:
//   https://<site>/api/stripe-webhook
// subscribed to
//   checkout.session.completed               cards: paid at once
//   checkout.session.async_payment_succeeded  delayed methods, if ever enabled
//   checkout.session.async_payment_failed     logged; the row stays pending
// and put that endpoint's signing secret in STRIPE_WEBHOOK_SECRET.
//
// Signature verification needs the exact bytes Stripe sent. On Vercel the
// Node helpers buffer the body to build req.body, then re-expose the same
// bytes through req.on('data') / req.on('end'), which is what rawBody() reads.
// (The Next.js-style `export const config = { api: { bodyParser: false } }`
// is not read by Vercel functions, so it is deliberately absent.)
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { sheetSummary, mirrorToSheet } from './register.js';

const PAID_EVENTS = ['checkout.session.completed', 'checkout.session.async_payment_succeeded'];

function rawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    // Fail loudly rather than hang until the function times out.
    const timer = setTimeout(() => reject(new Error('raw body not readable within 8 s')), 8000);
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => { clearTimeout(timer); resolve(Buffer.concat(chunks)); });
    req.on('error', (e) => { clearTimeout(timer); reject(e); });
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(503).json({ error: 'Stripe is not configured yet.' });
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    // 503, not 200: Stripe keeps retrying until the database is wired up.
    console.error('webhook: Supabase is not configured; cannot record the payment');
    return res.status(503).json({ error: 'Database is not configured yet.' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let event;
  try {
    const sig = req.headers['stripe-signature'];
    if (!sig) throw new Error('missing stripe-signature header');
    event = stripe.webhooks.constructEvent(await rawBody(req), sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (e) {
    console.error('webhook signature failed', e.message);
    return res.status(400).json({ error: 'Bad signature' });
  }

  const s = (event.data && event.data.object) || {};
  const ref = (s.metadata && s.metadata.ref) || '?';

  if (PAID_EVENTS.includes(event.type)) {
    // `completed` arrives with payment_status 'unpaid' for delayed methods;
    // their paid signal is async_payment_succeeded, so wait for it.
    if (s.payment_status !== 'paid') {
      console.log('webhook: ' + event.type + ' for ' + ref + ' has payment_status ' + s.payment_status + '; not marking paid');
      return res.status(200).json({ received: true });
    }
    if (!s.client_reference_id) {
      console.error('webhook: paid session ' + s.id + ' (ref ' + ref + ') has no client_reference_id');
      return res.status(200).json({ received: true });
    }
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const upd = await supabase.from('registrations').update({
      payment_status: 'paid',
      paid_at: new Date().toISOString(),
      stripe_payment_intent: typeof s.payment_intent === 'string' ? s.payment_intent : null,
      stripe_session_id: s.id
    }).eq('id', s.client_reference_id).select();
    if (upd.error) {
      console.error('mark-paid failed', upd.error);
      return res.status(500).json({ error: 'DB update failed' });   // Stripe retries
    }
    const row = upd.data && upd.data[0];
    if (!row) {
      console.error('webhook: no registration with id ' + s.client_reference_id + ' (ref ' + ref + ')');
      return res.status(200).json({ received: true });
    }
    if (typeof s.amount_total === 'number' && s.amount_total !== row.amount_cents) {
      console.error('webhook: amount mismatch for ' + row.ref + ': Stripe ' + s.amount_total + ' vs row ' + row.amount_cents);
    }
    await mirrorToSheet(sheetSummary(row));
    return res.status(200).json({ received: true, ref: row.ref });
  }

  if (event.type === 'checkout.session.async_payment_failed') {
    console.error('webhook: delayed payment failed for ' + ref + '; row stays pending for follow-up');
  }
  // Anything else (expired sessions, events added later in the dashboard) is
  // acknowledged so Stripe does not keep retrying it.
  return res.status(200).json({ received: true });
}
