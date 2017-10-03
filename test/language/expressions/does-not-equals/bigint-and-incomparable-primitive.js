// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Non-strict inequality comparison of BigInt and miscellaneous primitive values
esid: sec-abstract-equality-comparison
info: |
  ...
  13. Return false.

features: [BigInt]
---*/

assert.sameValue(0n != undefined, true);
assert.sameValue(undefined != 0n, true);
assert.sameValue(1n != undefined, true);
assert.sameValue(undefined != 1n, true);
assert.sameValue(0n != null, true);
assert.sameValue(null != 0n, true);
assert.sameValue(1n != null, true);
assert.sameValue(null != 1n, true);
assert.sameValue(0n != Symbol("1"), true);
assert.sameValue(Symbol("1") != 0n, true);
assert.sameValue(1n != Symbol("1"), true);
assert.sameValue(Symbol("1") != 1n, true);
