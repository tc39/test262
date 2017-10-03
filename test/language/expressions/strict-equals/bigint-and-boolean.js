// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Strict equality comparison of BigInt and Boolean values
esid: sec-strict-equality-comparison
info: |
  1. If Type(x) is different from Type(y), return false.

features: [BigInt]
---*/

assert.sameValue(-1n === false, false);
assert.sameValue(false === -1n, false);
assert.sameValue(-1n === true, false);
assert.sameValue(true === -1n, false);
assert.sameValue(0n === false, false);
assert.sameValue(false === 0n, false);
assert.sameValue(0n === true, false);
assert.sameValue(true === 0n, false);
assert.sameValue(1n === false, false);
assert.sameValue(false === 1n, false);
assert.sameValue(1n === true, false);
assert.sameValue(true === 1n, false);
assert.sameValue(2n === false, false);
assert.sameValue(false === 2n, false);
assert.sameValue(2n === true, false);
assert.sameValue(true === 2n, false);
