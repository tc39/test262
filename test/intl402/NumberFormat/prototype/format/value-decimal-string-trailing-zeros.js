// Copyright (C) 2025 Mozilla Foundation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  Intl.NumberFormat.prototype.format converts its argument (called value) to a
  number using ToIntlMathematicalValue, and retains trailing zeros during formatting.
features: [Intl.NumberFormat-v3, keep-trailing-zeros]
locale: [en-US]
---*/

const nf = new Intl.NumberFormat('en-US', { maximumFractionDigits: 20 });

assert.sameValue(nf.format('0'), '0');
assert.sameValue(nf.format('1'), '1');
assert.sameValue(nf.format('0.0'), '0.0');
assert.sameValue(nf.format('1.0'), '1.0');
assert.sameValue(nf.format('10.0'), '10.0');
assert.sameValue(nf.format('0.10'), '0.10');
assert.sameValue(nf.format('0.010'), '0.010');
assert.sameValue(nf.format('.10'), '0.10');
assert.sameValue(nf.format('.0'), '0.0');
assert.sameValue(nf.format('00.0'), '0.0');
assert.sameValue(nf.format('001'), '1');
assert.sameValue(nf.format('-0.00'), '-0.00');
assert.sameValue(nf.format('-.00'), '-0.00');
assert.sameValue(nf.format('3.100'), '3.100');
assert.sameValue(nf.format('6.000000'), '6.000000');
assert.sameValue(nf.format('1.230e1'), '12.30');
assert.sameValue(nf.format('1.230e-2'), '0.01230');

// maximumFractionDigits defaults to 3
const nf2 = new Intl.NumberFormat('en-US', { minimumFractionDigits: 1 });

assert.sameValue(nf2.format('1'), '1.0');
assert.sameValue(nf2.format('1.00'), '1.00');
assert.sameValue(nf2.format('1.000000'), '1.000');

const nf3 = new Intl.NumberFormat('en-US', {
  minimumSignificantDigits: 2,
  maximumSignificantDigits: 4,
});

assert.sameValue(nf3.format('1'), '1.0');
assert.sameValue(nf3.format('1.0'), '1.0');
assert.sameValue(nf3.format('1.00'), '1.00');
assert.sameValue(nf3.format('0.00'), '0.00');
assert.sameValue(nf3.format('.00'), '0.00');
assert.sameValue(nf3.format('1.000000'), '1.000');

const pf = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 10,
});

assert.sameValue(pf.format('1.0'), '100%');
assert.sameValue(pf.format('1.00'), '100%');
assert.sameValue(pf.format('0.50'), '50%');
assert.sameValue(pf.format('0.5000'), '50.00%');

const sf = new Intl.NumberFormat('en-US', { notation: 'scientific' });

assert.sameValue(sf.format('0.1'), '1E-1');
assert.sameValue(sf.format('0.01'), '1E-2');
assert.sameValue(sf.format('0.01200'), '1.200E-2');
assert.sameValue(sf.format('120.0'), '1.200E2');

const spf = new Intl.NumberFormat('en-US', {
  style: 'percent',
  notation: 'scientific',
  maximumFractionDigits: 10,
});

assert.sameValue(spf.format('0.0'), '0.0E0%');
assert.sameValue(spf.format('1.0'), '1.0E2%');
assert.sameValue(spf.format('1.00'), '1.00E2%');
assert.sameValue(spf.format('0.50'), '5.0E1%');
assert.sameValue(spf.format('0.5000'), '5.000E1%');
