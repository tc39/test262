// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-TypedArray-shell.js, compareArray.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
// TypedArray.prototype.sort should work across globals
let g2 = $262.createRealm().global;
assert.compareArray(
    Int32Array.prototype.sort.call(new g2.Int32Array([3, 2, 1])),
    new Int32Array([1, 2, 3])
);

