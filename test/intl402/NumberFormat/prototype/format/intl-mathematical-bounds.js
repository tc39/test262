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
var infinityStr = nf.format(Infinity);
var negInfinityStr = nf.format(-Infinity);

// Digits of the smallest out-of-bounds value
//   ((BigInt(Number.MAX_VALUE) + 2n ** 1024n) / 2n).toString()
// and the largest in-bounds value (one unit lower).
// Note that bounds changes are proposed by
// https://github.com/tc39/ecma402/pull/1022
var barelyTooBigBase10 = "179769313486231580793728971405303415079934132710037826936173778980444968292764750946649017977587207096330286416692887910946555547851940402630657488671505820681908902000708383676273854845817711531764475730270069855571366959622842914819860834936475292719074168444365510704342711559699508093042880177904174497792";
var almostTooBigBase10 = "179769313486231580793728971405303415079934132710037826936173778980444968292764750946649017977587207096330286416692887910946555547851940402630657488671505820681908902000708383676273854845817711531764475730270069855571366959622842914819860834936475292719074168444365510704342711559699508093042880177904174497791";
var barelyTooBigBase16 = "0xfffffffffffffc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
var almostTooBigBase16 = "0xfffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
var barelyTooBigBase2 = "0b1111111111111111111111111111111111111111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
var almostTooBigBase2 = "0b1111111111111111111111111111111111111111111111111111101111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
var barelyTooBigBase8 = "0o177777777777777777600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
var almostTooBigBase8 = "0o177777777777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777";

if (typeof BigInt !== "undefined") {
  assert.notSameValue(
    nf.format(BigInt(barelyTooBigBase10)),
    infinityStr,
    "BigInt values are not constrained"
  );
  assert.notSameValue(
    nf.format(-BigInt(barelyTooBigBase10)),
    negInfinityStr,
    "negative BigInt values are not constrained"
  );
}

// Positive decimal strings
assert.sameValue(
  nf.format(barelyTooBigBase10),
  infinityStr,
  "giant decimal string values round to infinity"
);
assert.notSameValue(
  nf.format(almostTooBigBase10),
  infinityStr,
  "big decimal string values do not round to infinity"
);

// Negative decimal strings
assert.sameValue(
  nf.format("-" + barelyTooBigBase10),
  negInfinityStr,
  "giant negative decimal string values round to negative infinity"
);
assert.notSameValue(
  nf.format("-" + almostTooBigBase10),
  negInfinityStr,
  "big negative decimal string values do not round to negative infinity"
);

// NOTE: Non-decimal strings can't have a leading sign, so we can only test
// positive numbers.

// Hexadecimal strings
assert.sameValue(
  nf.format(barelyTooBigBase16),
  infinityStr,
  "giant hexadecimal string values round to infinity"
);
assert.notSameValue(
  nf.format(almostTooBigBase16),
  infinityStr,
  "big hexadecimal string values do not round to infinity"
);

// Binary strings
assert.sameValue(
  nf.format(barelyTooBigBase2),
  infinityStr,
  "giant binary string values round to infinity"
);
assert.notSameValue(
  nf.format(almostTooBigBase2),
  infinityStr,
  "big binary string values do not round to infinity"
);

// Octal strings
assert.sameValue(
  nf.format(barelyTooBigBase8),
  infinityStr,
  "giant octal string values round to infinity"
);
assert.notSameValue(
  nf.format(almostTooBigBase8),
  infinityStr,
  "big octal string values do not round to infinity"
);
