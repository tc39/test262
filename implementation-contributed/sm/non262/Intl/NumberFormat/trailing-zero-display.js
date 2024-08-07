// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-NumberFormat-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
// "stripIfInteger" with fractional digits.
{
  let nf1 = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  });

  let nf2 = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    trailingZeroDisplay: "auto",
  });

  let nf3 = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    trailingZeroDisplay: "stripIfInteger",
  });

  assert.sameValue(nf1.resolvedOptions().trailingZeroDisplay, "auto");
  assert.sameValue(nf2.resolvedOptions().trailingZeroDisplay, "auto");
  assert.sameValue(nf3.resolvedOptions().trailingZeroDisplay, "stripIfInteger");

  assert.sameValue(nf1.format(123), "123.00");
  assert.sameValue(nf2.format(123), "123.00");
  assert.sameValue(nf3.format(123), "123");
}

// "stripIfInteger" with significand digits.
{
  let nf1 = new Intl.NumberFormat("en", {
    minimumSignificantDigits: 2,
  });

  let nf2 = new Intl.NumberFormat("en", {
    minimumSignificantDigits: 2,
    trailingZeroDisplay: "auto",
  });

  let nf3 = new Intl.NumberFormat("en", {
    minimumSignificantDigits: 2,
    trailingZeroDisplay: "stripIfInteger",
  });

  assert.sameValue(nf1.resolvedOptions().trailingZeroDisplay, "auto");
  assert.sameValue(nf2.resolvedOptions().trailingZeroDisplay, "auto");
  assert.sameValue(nf3.resolvedOptions().trailingZeroDisplay, "stripIfInteger");

  assert.sameValue(nf1.format(1), "1.0");
  assert.sameValue(nf2.format(1), "1.0");
  assert.sameValue(nf3.format(1), "1");
}

// "stripIfInteger" with rounding increment.
{
  let nf1 = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    roundingIncrement: 5,
  });
  let nf2 = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    roundingIncrement: 5,
    trailingZeroDisplay: "auto",
  });
  let nf3 = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    roundingIncrement: 5,
    trailingZeroDisplay: "stripIfInteger",
  });

  assert.sameValue(nf1.resolvedOptions().trailingZeroDisplay, "auto");
  assert.sameValue(nf2.resolvedOptions().trailingZeroDisplay, "auto");
  assert.sameValue(nf3.resolvedOptions().trailingZeroDisplay, "stripIfInteger");

  // NB: Tests 1.975 twice b/c of <https://unicode-org.atlassian.net/browse/ICU-21674>.

  assert.sameValue(nf1.format(1.975), "2.00");
  assert.sameValue(nf1.format(1.97), "1.95");
  assert.sameValue(nf1.format(1.975), "2.00");

  assert.sameValue(nf2.format(1.975), "2.00");
  assert.sameValue(nf2.format(1.97), "1.95");
  assert.sameValue(nf2.format(1.975), "2.00");

  assert.sameValue(nf3.format(1.975), "2");
  assert.sameValue(nf3.format(1.97), "1.95");
  assert.sameValue(nf3.format(1.975), "2");
}

// Invalid values.
for (let trailingZeroDisplay of ["", "true", true, "none", "yes", "no"]){
  assertThrowsInstanceOf(() => new Intl.NumberFormat("en", {trailingZeroDisplay}), RangeError);
}

