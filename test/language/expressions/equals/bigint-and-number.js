// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Non-strict equality comparison of BigInt and Number values
esid: sec-abstract-equality-comparison
info: |
  12. If Type(x) is BigInt and Type(y) is Number, or if Type(x) is Number and Type(y) is BigInt,
    b. If the mathematical value of x is equal to the mathematical value of y, return true, otherwise return false.

features: [BigInt]
---*/

assert.sameValue(0n == 0, true);
assert.sameValue(0 == 0n, true);
assert.sameValue(0n == -0, true);
assert.sameValue(-0 == 0n, true);
assert.sameValue(0n == 0.000000000001, false);
assert.sameValue(0.000000000001 == 0n, false);
assert.sameValue(0n == 1, false);
assert.sameValue(1 == 0n, false);
assert.sameValue(1n == 0, false);
assert.sameValue(0 == 1n, false);
assert.sameValue(1n == 0.999999999999, false);
assert.sameValue(0.999999999999 == 1n, false);
assert.sameValue(1n == 1, true);
assert.sameValue(1 == 1n, true);
assert.sameValue(0n == Number.MIN_VALUE, false);
assert.sameValue(Number.MIN_VALUE == 0n, false);
assert.sameValue(0n == -Number.MIN_VALUE, false);
assert.sameValue(-Number.MIN_VALUE == 0n, false);
assert.sameValue(-10n == Number.MIN_VALUE, false);
assert.sameValue(Number.MIN_VALUE == -10n, false);
