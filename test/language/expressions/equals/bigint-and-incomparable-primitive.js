// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Non-strict equality comparison of BigInt and miscellaneous primitive values
esid: sec-abstract-equality-comparison
info: |
  ...
  13. Return false.

features: [BigInt]
---*/

assert.sameValue(0n == undefined, false);
assert.sameValue(undefined == 0n, false);
assert.sameValue(1n == undefined, false);
assert.sameValue(undefined == 1n, false);
assert.sameValue(0n == null, false);
assert.sameValue(null == 0n, false);
assert.sameValue(1n == null, false);
assert.sameValue(null == 1n, false);
assert.sameValue(0n == Symbol("1"), false);
assert.sameValue(Symbol("1") == 0n, false);
assert.sameValue(1n == Symbol("1"), false);
assert.sameValue(Symbol("1") == 1n, false);
