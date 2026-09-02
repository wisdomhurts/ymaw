/**
 * YMAW registrations → Google Sheet.
 *
 * Bound Apps Script for the "YMAW 2026 Registrations" sheet. Deployed as a
 * web app (Execute as: me · Who has access: Anyone), it receives one JSON
 * POST per registration insert/update from a Supabase database webhook and
 * upserts the row by Ref. The sheet is a mirror for the team; Supabase stays
 * the source of truth.
 *
 * Setup: Extensions → Apps Script → paste → Deploy → New deployment →
 * Web app → Execute as Me, Anyone → Deploy → copy the URL.
 */
var HEADERS = ['Ref','Registered at','Type','Contact name','Contact email','Contact phone',
  'Young man first','Young man last','Age','Pickup','Headcount','Amount CAD',
  'Payment method','Payment status','Emergency name','Emergency phone',
  'Medical notes','Photo consent','Details'];

function doPost(e) {
  var body = JSON.parse(e.postData.contents || '{}');
  var rec = body.record || body;              // Supabase webhook shape: {type, table, record, old_record}
  if (!rec || !rec.ref) return out({ ok: false, error: 'no record' });
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  ensureHeaders(sh);
  var row = toRow(rec);
  var refs = sh.getRange(2, 1, Math.max(sh.getLastRow() - 1, 1), 1).getValues().map(function (r) { return r[0]; });
  var i = refs.indexOf(rec.ref);
  if (i >= 0) sh.getRange(i + 2, 1, 1, row.length).setValues([row]);
  else sh.appendRow(row);
  return out({ ok: true, ref: rec.ref, action: i >= 0 ? 'updated' : 'inserted' });
}

function ensureHeaders(sh) {
  if (sh.getLastRow() === 0 || sh.getRange(1, 1).getValue() !== 'Ref') {
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
}

function toRow(r) {
  var d = r.details || {};
  return [
    r.ref, r.created_at, r.registrant_type, r.parent_name, r.parent_email, r.parent_phone,
    r.son_first || '', r.son_last || '', r.son_age || '', d.pickup || '',
    r.headcount || 1, (r.amount_cents || 0) / 100,
    r.payment_method, r.payment_status, r.emergency_name || '', r.emergency_phone || '',
    r.medical_notes || '', r.photo_consent ? 'yes' : 'no',
    JSON.stringify(d)
  ];
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
