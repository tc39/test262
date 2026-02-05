// Copyright 2026 André Bargull. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.pluralrules.prototype.select
description: >
  Call select() with a String argument when a rounding mode is set
info: |
  Intl.PluralRules.prototype.select ( value )
    ...
    3. Let n be ? ToIntlMathematicalValue(value).
    4. Return ResolvePlural(pr, n).[[PluralCategory]].
locale: [en]
---*/

const plCeil = new Intl.PluralRules("en", {
  roundingMode: "ceil",
  maximumFractionDigits: 0,
});

assert.sameValue(
  plCeil.select(1.0000000000000001),
  plCeil.select(1),
  "1.0000000000000001 as a Number rounds down to 1"
);

assert.sameValue(
  plCeil.select("1.0000000000000001"),
  plCeil.select(2),
  "1.0000000000000001 as a String rounds up to 2"
);

const plFloor = new Intl.PluralRules("en", {
  roundingMode: "floor",
  maximumFractionDigits: 0,
});

assert.sameValue(
  plFloor.select(0.99999999999999999),
  plFloor.select(1),
  "0.99999999999999999 as a Number rounds up to 1"
);

assert.sameValue(
  plFloor.select("0.99999999999999999"),
  plFloor.select(0),
  "0.99999999999999999 as a String rounds down to 0"
);
