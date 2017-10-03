// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Strict inequality comparison of BigInt and Boolean values
esid: sec-strict-equality-comparison
info: |
  1. If Type(x) is different from Type(y), return false.

features: [BigInt]
---*/

assert.sameValue(-1n !== false, true);
assert.sameValue(false !== -1n, true);
assert.sameValue(-1n !== true, true);
assert.sameValue(true !== -1n, true);
assert.sameValue(0n !== false, true);
assert.sameValue(false !== 0n, true);
assert.sameValue(0n !== true, true);
assert.sameValue(true !== 0n, true);
assert.sameValue(1n !== false, true);
assert.sameValue(false !== 1n, true);
assert.sameValue(1n !== true, true);
assert.sameValue(true !== 1n, true);
assert.sameValue(2n !== false, true);
assert.sameValue(false !== 2n, true);
assert.sameValue(2n !== true, true);
assert.sameValue(true !== 2n, true);
