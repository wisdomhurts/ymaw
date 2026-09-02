/**
 * YMAW registrations -> Google Sheet.
 *
 * Bound Apps Script for the "YMAW 2026 Registrations" sheet. Deployed as a
 * web app (Execute as: me / Who has access: Anyone), it receives one JSON
 * POST per registration and upserts the row by Ref. The sheet is a mirror
 * for the team; Supabase stays the source of truth.
 *
 * Two senders, one shape ({ record: {...} } or the bare record):
 *   - the site itself, when the Vercel env var SHEETS_WEBHOOK_URL holds this
 *     web app's URL: api/register.js posts after every insert, and
 *     api/stripe-webhook.js posts again when a card payment lands (the row's
 *     Payment status flips to paid). Those summaries never carry medical
 *     notes, emergency contacts or the typed signature; they stay in Supabase.
 *   - optionally a Supabase database webhook ({type, table, record, ...}).
 *     Full rows arrive that way, but only the columns below are written.
 *
 * Setup: Extensions -> Apps Script -> paste -> Deploy -> New deployment ->
 * Web app -> Execute as Me, Anyone -> Deploy -> copy the URL into Vercel as
 * SHEETS_WEBHOOK_URL. Start from a blank sheet: the header row is (re)written
 * to match HEADERS, and every upsert rewrites the whole row.
 */
var HEADERS = ['Ref', 'Registered at', 'Type', 'Contact name', 'Contact email', 'Contact phone',
  'Young man first', 'Young man last', 'Age', 'Young men (sponsor group)', 'Pickup',
  'Headcount', 'Amount CAD', 'Payment method', 'Payment status', 'Paid at',
  'Media release', 'Release version', 'Details'];

function doPost(e) {
  var body = JSON.parse(e.postData.contents || '{}');
  var rec = body.record || body;
  if (!rec || !rec.ref) return out({ ok: false, error: 'no record' });
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  ensureHeaders(sh);
  var row = toRow(rec);
  var last = sh.getLastRow();
  var i = -1;
  if (last > 1) {
    var refs = sh.getRange(2, 1, last - 1, 1).getValues().map(function (r) { return r[0]; });
    i = refs.indexOf(rec.ref);
  }
  if (i >= 0) sh.getRange(i + 2, 1, 1, row.length).setValues([row]);
  else sh.appendRow(row);
  return out({ ok: true, ref: rec.ref, action: i >= 0 ? 'updated' : 'inserted' });
}

function ensureHeaders(sh) {
  var have = sh.getLastRow() ? sh.getRange(1, 1, 1, HEADERS.length).getValues()[0] : [];
  if (have.join('|') !== HEADERS.join('|')) {
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
}

function toRow(r) {
  var d = r.details || {};
  var group = (r.young_men || d.young_men || []).map(function (y) {
    return [y.first, y.last].join(' ').trim() + (y.age ? ' (' + y.age + ')' : '');
  }).join('; ');
  var release = r.media_release_granted === true ? 'granted'
              : r.media_release_granted === false ? 'declined'
              : (r.photo_consent ? 'granted (legacy checkbox)' : '');
  return [
    r.ref, r.created_at || '', r.registrant_type || '', r.parent_name || '', r.parent_email || '', r.parent_phone || '',
    r.son_first || '', r.son_last || '', r.son_age || '', group, r.pickup || d.pickup || '',
    r.headcount || 1, (r.amount_cents || 0) / 100,
    r.payment_method || '', r.payment_status || '', r.paid_at || '',
    release, r.media_release_version || '',
    JSON.stringify(d)
  ];
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
