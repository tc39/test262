// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number-format-functions
description: >
  ToIntlMathematicalValue applies "Number value" to the IntlMV value
info: |
  Number Format Functions

  ...
  4. Let x be ? ToIntlMathematicalValue(value).
  5. Return FormatNumeric(nf, x).

  ToIntlMathematicalValue ( value )

  ...
  2. If primValue is a BigInt, return ℝ(primValue).
  3. If primValue is a String, then
    a. Let str be primValue.
  4.
    a. Let x be ? ToNumber(primValue).
    b. If x is -0𝔽, return negative-zero.
    c. Let str be Number::toString(x, 10).
  ...
  8. Let intlMV be the StringIntlMV of literal.
  9. If intlMV is a mathematical value, then
    a.Let rounded be RoundMVResult(abs(intlMV)).
    b. If rounded is +∞𝔽 and intlMV < 0, return negative-infinity.
    c. If rounded is +∞𝔽, return positive-infinity.
    ...

  RoundMVResult ( n )
  1. If the decimal representation of n has 20 or fewer significant digits, return 𝔽(n).
  ...
  5. Return 𝔽(chosen).
---*/

var nf = new Intl.NumberFormat();

// Smallest out-of-bounds value as a BigInt value.
//
// From: https://github.com/tc39/ecma402/pull/1022
var limit = 10n ** 10000n;

assert.notSameValue(
  nf.format(limit),
  nf.format(Infinity),
  "BigInt values are not constrained by 𝔽"
);
assert.notSameValue(
  nf.format(-limit),
  nf.format(-Infinity),
  "Negative BigInt values are not constrained by 𝔽"
);

assert.sameValue(
  nf.format(limit.toString(10)),
  nf.format(Infinity),
  "Decimal number string values are constrained by 𝔽"
);

assert.sameValue(
  nf.format("-" + limit.toString(10)),
  nf.format(-Infinity),
  "Negative decimal number string values are constrained by 𝔽"
);

// NOTE: Non-decimal strings can't have a leading sign, so we can only test
// positive numbers.

assert.sameValue(
  nf.format("0x" + limit.toString(16)),
  nf.format(Infinity),
  "Hexadecimal number string values are constrained by 𝔽"
);

assert.sameValue(
  nf.format("0b" + limit.toString(2)),
  nf.format(Infinity),
  "Binary number string values are constrained by 𝔽"
);

assert.sameValue(
  nf.format("0o" + limit.toString(8)),
  nf.format(Infinity),
  "Octal number string values are constrained by 𝔽"
);
