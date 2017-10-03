// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Strict inequality comparison of BigInt and Number values
esid: sec-strict-equality-comparison
info: |
  1. If Type(x) is different from Type(y), return false.

features: [BigInt]
---*/

assert.sameValue(0n !== 0, true);
assert.sameValue(0 !== 0n, true);
assert.sameValue(0n !== -0, true);
assert.sameValue(-0 !== 0n, true);
assert.sameValue(0n !== 0.000000000001, true);
assert.sameValue(0.000000000001 !== 0n, true);
assert.sameValue(0n !== 1, true);
assert.sameValue(1 !== 0n, true);
assert.sameValue(1n !== 0, true);
assert.sameValue(0 !== 1n, true);
assert.sameValue(1n !== 0.999999999999, true);
assert.sameValue(0.999999999999 !== 1n, true);
assert.sameValue(1n !== 1, true);
assert.sameValue(1 !== 1n, true);
assert.sameValue(0n !== Number.MIN_VALUE, true);
assert.sameValue(Number.MIN_VALUE !== 0n, true);
assert.sameValue(0n !== -Number.MIN_VALUE, true);
assert.sameValue(-Number.MIN_VALUE !== 0n, true);
assert.sameValue(-10n !== Number.MIN_VALUE, true);
assert.sameValue(Number.MIN_VALUE !== -10n, true);
