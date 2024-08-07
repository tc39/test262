// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/var tupleIndex = -1;
var originalLength = 7;
var obj = {
  length: originalLength,
  0: 2,
  1: 4,
  2: 8,
  3: 16,
  4: 32,
  5: 64,
  6: 128
};
var tuple = #[2, 4, 8, 16, 32, 64, 128];

function mapFn(value, index) {
    tupleIndex++;
    assert.sameValue(value, obj[tupleIndex]);
    assert.sameValue(index, tupleIndex);
    obj[originalLength + tupleIndex] = 2 * tupleIndex + 1;

    return obj[tupleIndex];
}


var t = Tuple.from(obj, mapFn);
assert.sameValue(t, tuple);

