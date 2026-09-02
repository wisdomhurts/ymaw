/* Registration: three registrant types, four steps, three payment paths, one
   POST. The server validates everything again. */
(function () {
  var form = document.getElementById('regForm');
  if (!form) return;
  var PRICE = 320;
  var steps = Array.prototype.slice.call(form.querySelectorAll('.reg-step'));
  var dots = Array.prototype.slice.call(form.querySelectorAll('[data-step-dot]'));
  var back = form.querySelector('.reg-back');
  var next = form.querySelector('.reg-next');
  var errEl = form.querySelector('.reg-error');
  var typeBtns = Array.prototype.slice.call(document.querySelectorAll('.reg-type'));
  var current = 0;
  var cardLive = true;

  var STEP_LABELS = {
    young_man:  ['Parent', 'Young man', 'Consent', 'Payment'],
    sponsor:    ['You', 'Young men', 'Consent', 'Payment'],
    production: ['You', 'Availability', 'Standards', 'Payment']
  };

  function type() { return form.getAttribute('data-type'); }

  /* Type-specific blocks carry data-for="a b". Everything else is shared.
     Hidden blocks are disabled so they neither validate nor submit. */
  function applyType(t) {
    form.setAttribute('data-type', t);
    form.registrant_type.value = t;
    Array.prototype.forEach.call(form.querySelectorAll('[data-for]'), function (el) {
      var on = el.getAttribute('data-for').split(/\s+/).indexOf(t) > -1;
      el.hidden = !on;
      Array.prototype.forEach.call(el.querySelectorAll('input, select, textarea, button'), function (f) { f.disabled = !on; });
    });
    Array.prototype.forEach.call(form.querySelectorAll('legend[data-legend]'), function (l) {
      try { l.textContent = JSON.parse(l.getAttribute('data-legend'))[t] || l.textContent; } catch (e) {}
    });
    dots.forEach(function (d, i) { d.textContent = STEP_LABELS[t][i]; });
    typeBtns.forEach(function (b) {
      var on = b.getAttribute('data-type') === t;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });
    updateTotal();
    if (current > 0) show(0, true);
  }

  typeBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      applyType(b.getAttribute('data-type'));
      document.getElementById('form').scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  });

  /* Deep links: register.html#sponsor, #production, #young-man */
  function fromHash() {
    var h = (location.hash || '').replace('#', '').replace('-', '_');
    if (h === 'young_man' || h === 'sponsor' || h === 'production') applyType(h);
  }

  /* Sponsors list the young men they bring; each is a $320 registration. */
  var rows = document.getElementById('ymRows');
  var addBtn = document.getElementById('addYm');
  function refreshRows() {
    var all = rows.querySelectorAll('.reg-ymrow');
    Array.prototype.forEach.call(all, function (r) {
      r.querySelector('.reg-ymrow__x').hidden = all.length < 2;
    });
    updateTotal();
  }
  if (addBtn) {
    addBtn.addEventListener('click', function () {
      var first = rows.querySelector('.reg-ymrow');
      var clone = first.cloneNode(true);
      Array.prototype.forEach.call(clone.querySelectorAll('input, select'), function (f) { f.value = ''; f.disabled = false; });
      clone.querySelector('.reg-ymrow__x').disabled = false;
      rows.appendChild(clone);
      refreshRows();
      clone.querySelector('input').focus();
    });
    rows.addEventListener('click', function (e) {
      var x = e.target.closest('.reg-ymrow__x');
      if (!x) return;
      x.closest('.reg-ymrow').remove();
      refreshRows();
    });
  }

  function headcount() {
    if (type() === 'sponsor') return 1 + rows.querySelectorAll('.reg-ymrow').length;
    return 1;
  }
  function updateTotal() {
    var n = headcount();
    var total = n * PRICE;
    var t = document.getElementById('payTotal');
    var b = document.getElementById('payBreakdown');
    if (t) t.textContent = '$' + total;
    if (b) b.textContent = type() === 'sponsor'
      ? 'You and ' + (n - 1) + (n - 1 === 1 ? ' young man' : ' young men') + ': ' + n + ' × $' + PRICE + ' = $' + total + '. Everyone pays the same.'
      : '$' + PRICE + ' per person. Everyone at the weekend pays the same.';
  }

  function show(i, noScroll) {
    current = i;
    steps.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
    dots.forEach(function (d, k) {
      d.classList.toggle('is-on', k === i);
      d.classList.toggle('is-done', k < i);
    });
    back.hidden = i === 0;
    next.textContent = i < steps.length - 1 ? 'Continue' : payLabel();
    errEl.hidden = true;
    var first = steps[i].querySelector('input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])');
    if (first) first.focus({ preventScroll: true });
    if (!noScroll) form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function payLabel() {
    var v = form.payment_method.value;
    return v === 'card' ? 'Continue to payment'
         : v === 'etransfer' ? 'Reserve the spot'
         : 'Send request';
  }
  Array.prototype.forEach.call(form.querySelectorAll('input[name=payment_method]'), function (r) {
    r.addEventListener('change', function () { next.textContent = payLabel(); });
  });

  function validStep(i) {
    var fields = steps[i].querySelectorAll('input:not([disabled]), select:not([disabled]), textarea:not([disabled])');
    for (var k = 0; k < fields.length; k++) {
      if (!fields[k].checkValidity()) { fields[k].reportValidity(); return false; }
    }
    return true;
  }

  back.addEventListener('click', function () { show(current - 1); });
  next.addEventListener('click', function () {
    if (!validStep(current)) return;
    if (current < steps.length - 1) { show(current + 1); return; }
    submit();
  });

  function fail(msg) {
    errEl.textContent = msg;
    errEl.hidden = false;
    next.disabled = false;
    next.textContent = payLabel();
  }

  function collect() {
    var data = { young_men: [], availability: [] };
    new FormData(form).forEach(function (v, k) {
      if (k === 'ym_first[]' || k === 'ym_last[]' || k === 'ym_age[]') return;
      if (k === 'availability[]') { data.availability.push(v); return; }
      data[k] = v;
    });
    if (type() === 'sponsor') {
      Array.prototype.forEach.call(rows.querySelectorAll('.reg-ymrow'), function (r) {
        data.young_men.push({
          first: r.querySelector('[name="ym_first[]"]').value,
          last: r.querySelector('[name="ym_last[]"]').value,
          age: r.querySelector('[name="ym_age[]"]').value
        });
      });
    }
    var cw = form.querySelector('input[name=consent_waiver]:not([disabled])');
    data.consent_waiver = !!(cw && cw.checked);
    var pc = form.querySelector('input[name=photo_consent]:not([disabled])');
    data.photo_consent = !!(pc && pc.checked);
    var so = form.querySelector('input[name=screening_ok]:not([disabled])');
    data.screening_ok = !!(so && so.checked);
    data.waiver_version = type() === 'production' ? 'standards-2026-1' : 'v2026-1';
    data.headcount = headcount();
    return data;
  }

  function submit() {
    next.disabled = true;
    next.textContent = 'One moment';
    var data = collect();
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok) return fail(res.j.error || 'Something went wrong. Email info@ymaw.com and we will register you by hand.');
        if (res.j.url) { location.href = res.j.url; return; }
        var q = '?path=' + encodeURIComponent(res.j.fallback || data.payment_method) +
                '&type=' + encodeURIComponent(type()) +
                '&ref=' + encodeURIComponent(res.j.ref || '') +
                '&total=' + encodeURIComponent(res.j.total_cents ? res.j.total_cents / 100 : headcount() * PRICE) +
                '&who=' + encodeURIComponent(type() === 'young_man' ? (data.ym_first || '') : (data.contact_name || '')) +
                (res.j.demo ? '&demo=1' : '');
        location.href = '/success.html' + q;
      })
      .catch(function () { fail('Could not reach the server. Check your connection and try again, or email info@ymaw.com.'); });
  }

  /* Only offer the payment rails that are live. */
  fetch('/api/config').then(function (r) { return r.ok ? r.json() : null; })
    .then(function (cfg) {
      if (!cfg || cfg.card) return;
      cardLive = false;
      var card = form.querySelector('input[name=payment_method][value=card]');
      if (!card) return;
      card.closest('.reg-payopt').hidden = true;
      card.checked = false;
      form.querySelector('input[name=payment_method][value=etransfer]').checked = true;
      if (current === steps.length - 1) next.textContent = payLabel();
    })
    .catch(function () {});

  applyType('young_man');
  fromHash();
  addEventListener('hashchange', fromHash);
  show(0, true);

  if (new URLSearchParams(location.search).get('canceled')) {
    errEl.textContent = 'Checkout was cancelled. Nothing was charged; the details are saved and you can pay any time.';
    errEl.hidden = false;
    show(3);
  }
})();
