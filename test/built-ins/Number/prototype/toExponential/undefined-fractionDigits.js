// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.2
esid: sec-number.prototype.toexponential
description: >
  Handle undefined fractionDigits when this is no 0
info: |
  Number.prototype.toExponential ( fractionDigits )

  1. Let x be ? thisNumberValue(this value).
  2. Let f be ? ToInteger(fractionDigits).
  [...]
  10. Else x ≠ 0,
    a. If fractionDigits is not undefined, then
      ...
    b. Else fractionDigits is undefined,
      ii. Let e, n, and f be integers such that f ≥ 0, 10f ≤ n < 10f+1, the
      Number value for n × 10e-f is x, and f is as small as possible. Note that
      the decimal representation of n has f+1 digits, n is not divisible by 10,
      and the least significant digit of n is not necessarily uniquely
      determined by these criteria.
  [...]
---*/

assert.sameValue((123.456).toExponential(undefined), "1.23456e+2", "undefined");
assert.sameValue((123.456).toExponential(), "1.23456e+2", "no arg");

assert.sameValue((-123.456).toExponential(undefined), "-1.23456e+2", "undefined");
assert.sameValue((-123.456).toExponential(), "-1.23456e+2", "no arg");

assert.sameValue((0.0001).toExponential(undefined), "1e-4", "undefined");
assert.sameValue((0.0001).toExponential(), "1e-4", "no arg");

assert.sameValue((0.9999).toExponential(undefined), "9.999e-1", "undefined");
assert.sameValue((0.9999).toExponential(), "9.999e-1", "no arg");
