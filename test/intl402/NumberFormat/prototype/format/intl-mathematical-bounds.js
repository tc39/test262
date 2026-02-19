// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number-format-functions
description: >
  ToIntlMathematicalValue constrains non-bigint input.
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
    a. Let rounded be RoundMVResult(abs(intlMV)).
    b. If rounded is +∞𝔽 and intlMV < 0, return negative-infinity.
    c. If rounded is +∞𝔽, return positive-infinity.
    ...
  10. Return intlMV.

  RoundMVResult ( n )
  1. If the decimal representation of n has 20 or fewer significant digits, return 𝔽(n).
  ...
  5. Return 𝔽(chosen).

  Mathematical Operations
  A conversion from a mathematical value or extended mathematical value x to a
  Number is denoted as "the Number value for x" or 𝔽(x), and is defined in
  The Number Type.

  The Number Type
  In this specification, the phrase “the Number value for x” where x represents
  an exact real mathematical quantity (which might even be an irrational number
  such as π) means a Number value chosen in the following manner. Consider the
  set of all finite values of the Number type, with -0𝔽 removed and with two
  additional values added to it that are not representable in the Number type,
  namely 2**1024 (which is +1 × 2**53 × 2**971) and -2**1024 (which is
  -1 × 2**53 × 2**971). Choose the member of this set that is closest in value
  to x. If two values of the set are equally close, then the one with an even
  significand is chosen; for this purpose, the two extra values 2**1024 and
  -2**1024 are considered to have even significands. Finally, if 2**1024 was
  chosen, replace it with +∞𝔽; if -2**1024 was chosen, replace it with -∞𝔽; if
  +0𝔽 was chosen, replace it with -0𝔽 if and only if x < 0; any other chosen
  value is used unchanged.
---*/

var nf = new Intl.NumberFormat();

// Smallest out-of-bounds value as a BigInt value.
//
// From: https://github.com/tc39/ecma402/pull/1022
var limit = 10n ** 10000n;

if (typeof BigInt !== "undefined") {
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
}

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
