// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Strict equality comparison of BigInt and non-finite Number values
esid: sec-strict-equality-comparison
info: |
  1. If Type(x) is different from Type(y), return false.

features: [BigInt]
---*/

assert.sameValue(0n === Infinity, false);
assert.sameValue(Infinity === 0n, false);
assert.sameValue(1n === Infinity, false);
assert.sameValue(Infinity === 1n, false);
assert.sameValue(-1n === Infinity, false);
assert.sameValue(Infinity === -1n, false);
assert.sameValue(0n === -Infinity, false);
assert.sameValue(-Infinity === 0n, false);
assert.sameValue(1n === -Infinity, false);
assert.sameValue(-Infinity === 1n, false);
assert.sameValue(-1n === -Infinity, false);
assert.sameValue(-Infinity === -1n, false);
assert.sameValue(0n === NaN, false);
assert.sameValue(NaN === 0n, false);
assert.sameValue(1n === NaN, false);
assert.sameValue(NaN === 1n, false);
assert.sameValue(-1n === NaN, false);
assert.sameValue(NaN === -1n, false);
