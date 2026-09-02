// POST /api/register - one endpoint, three registrant types:
//   young_man  : a parent/guardian registers one young man (12-17)
//   sponsor    : an adult bringing one or more young men (each a registration)
//   production : volunteer staff
// Everyone pays the same $320 per person. Payment paths:
//   card       -> Stripe Checkout session, respond { url }
//   etransfer  -> record as pending,   respond { ok, ref }
//   aid        -> record aid request,  respond { ok, ref }
// With no SUPABASE_URL configured the endpoint answers { demo: true } and
// stores nothing, so the deployed site works honestly before provisioning.
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { randomBytes } from 'node:crypto';

const PRICE_CENTS = 32000;
const EVENT = 'ymaw-2026';
const TYPES = ['young_man', 'sponsor', 'production'];
const TYPE_LABEL = { young_man: 'Young Man', sponsor: 'Sponsor', production: 'Production Team' };

function makeRef() {
  const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const b = randomBytes(5);
  let s = '';
  for (let i = 0; i < 5; i++) s += alphabet[b[i] % alphabet.length];
  return 'YMAW-' + s;
}
const bad = (res, msg) => res.status(400).json({ error: msg });
const clip = (v, n) => String(v ?? '').slice(0, n);
const truthy = (v) => v === true || v === 'true' || v === 'on';
const okAge = (a) => { const n = parseInt(a, 10); return n >= 12 && n <= 17 ? n : null; };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const d = req.body || {};
  if (d.website) return res.status(200).json({ ok: true, ref: makeRef() });

  const type = TYPES.includes(d.registrant_type) ? d.registrant_type : null;
  if (!type) return bad(res, 'Choose who is registering.');
  for (const k of ['contact_name', 'contact_email', 'contact_phone', 'payment_method']) {
    if (!d[k] || String(d[k]).trim() === '') return bad(res, 'Missing: ' + k.replace('contact_', '').replace(/_/g, ' '));
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.contact_email)) return bad(res, 'That email does not look right.');
  if (!['card', 'etransfer', 'aid'].includes(d.payment_method)) return bad(res, 'Unknown payment method.');
  if (!truthy(d.consent_waiver)) return bad(res, type === 'production' ? 'The YMAW Standards have to be accepted.' : 'The participation agreement has to be accepted.');

  // Type-specific validation + the details we store alongside the row.
  let details = {};
  let headcount = 1;
  let ym = { first: null, last: null, age: null };
  if (type === 'young_man') {
    const age = okAge(d.ym_age);
    if (!d.ym_first || !d.ym_last || !age) return bad(res, 'The young man needs a first name, last name and an age from 12 to 17.');
    if (!d.emergency_name || !d.emergency_phone) return bad(res, 'An emergency contact is needed.');
    ym = { first: clip(d.ym_first, 80), last: clip(d.ym_last, 80), age };
    details = { pickup: clip(d.pickup, 60) };
  } else if (type === 'sponsor') {
    const list = Array.isArray(d.young_men) ? d.young_men : [];
    const clean = list.map((y) => ({ first: clip(y.first, 80), last: clip(y.last, 80), age: okAge(y.age) }))
      .filter((y) => y.first && y.last && y.age);
    if (!clean.length) return bad(res, 'List at least one young man you are bringing, with an age from 12 to 17.');
    if (clean.length !== list.length) return bad(res, 'Every young man needs a first name, last name and an age from 12 to 17.');
    if (!d.relationship) return bad(res, 'Tell us your relationship to the young men.');
    details = { relationship: clip(d.relationship, 40), young_men: clean };
    headcount = 1 + clean.length;
  } else {
    if (!d.region) return bad(res, 'Tell us where you are based.');
    if (!['first_time', 'returning'].includes(d.experience)) return bad(res, 'Have you staffed before?');
    if (!truthy(d.screening_ok)) return bad(res, 'Volunteer screening has to be acknowledged.');
    details = {
      region: clip(d.region, 120),
      experience: d.experience,
      availability: (Array.isArray(d.availability) ? d.availability : []).map((a) => clip(a, 40)).slice(0, 10),
      skills: clip(d.skills, 2000) || null
    };
  }
  const total = PRICE_CENTS * headcount;
  const ref = makeRef();

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ ok: true, demo: true, ref, total_cents: total });
  }

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const row = {
    ref,
    event: EVENT,
    registrant_type: type,
    parent_name: clip(d.contact_name, 120),
    parent_email: clip(d.contact_email, 160),
    parent_phone: clip(d.contact_phone, 40),
    son_first: ym.first,
    son_last: ym.last,
    son_age: ym.age,
    emergency_name: clip(d.emergency_name, 120) || null,
    emergency_phone: clip(d.emergency_phone, 40) || null,
    medical_notes: clip(d.medical_notes, 2000) || null,
    consent_waiver: true,
    waiver_version: clip(d.waiver_version, 40) || (type === 'production' ? 'standards-2026-1' : 'v2026-1'),
    consented_at: new Date().toISOString(),
    photo_consent: truthy(d.photo_consent),
    payment_method: d.payment_method,
    payment_status: d.payment_method === 'aid' ? 'aid_requested' : 'pending',
    amount_cents: total,
    headcount,
    details
  };
  const ins = await supabase.from('registrations').insert(row).select('id').single();
  if (ins.error) {
    console.error('register insert failed', ins.error);
    return res.status(500).json({ error: 'Could not save the registration. Email info@ymaw.com and we will register you by hand.' });
  }

  if (d.payment_method !== 'card') return res.status(200).json({ ok: true, ref, total_cents: total });

  if (!process.env.STRIPE_SECRET_KEY) {
    await supabase.from('registrations').update({ payment_method: 'etransfer' }).eq('id', ins.data.id);
    return res.status(200).json({ ok: true, ref, total_cents: total, url: null, fallback: 'etransfer' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = process.env.PUBLIC_SITE_URL ||
    ('https://' + (req.headers['x-forwarded-host'] || req.headers.host));
  const who = type === 'young_man' ? ym.first : row.parent_name;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      client_reference_id: ins.data.id,
      customer_email: row.parent_email,
      line_items: [{
        quantity: headcount,
        price_data: {
          currency: 'cad',
          unit_amount: PRICE_CENTS,
          product_data: {
            name: 'YMAW 2026 · ' + TYPE_LABEL[type] + ' registration · ' + who,
            description: 'Young Men’s Adventure Weekend, September 11 to 13, 2026, Squamish BC. Transport, meals, camping and all activities included.'
          }
        }
      }],
      metadata: { ref, event: EVENT, registrant_type: type, headcount: String(headcount) },
      success_url: origin + '/success.html?path=card&type=' + type + '&ref=' + ref + '&total=' + (total / 100) + '&who=' + encodeURIComponent(who),
      cancel_url: origin + '/register.html?canceled=1#' + type.replace('_', '-')
    });
    await supabase.from('registrations').update({ stripe_session_id: session.id }).eq('id', ins.data.id);
    return res.status(200).json({ ok: true, ref, total_cents: total, url: session.url });
  } catch (e) {
    console.error('stripe session failed', e);
    return res.status(500).json({ error: 'Card checkout is unavailable right now. Choose e-Transfer, or email info@ymaw.com.' });
  }
}
