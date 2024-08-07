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
---*/var originalTuple = #[0, 1, -2, 4, -8, 16];
var array = [0,1,-2,4,-8,16];
var t = #[];
var arrayIndex = -1;

function mapFn(value, index) {
    this.arrayIndex++;
    assert.sameValue(value, array[this.arrayIndex]);
    assert.sameValue(index, this.arrayIndex);
    array.splice(array.length - 1, 1);
    return 127;
}


t = Tuple.from(array, mapFn, this);

assert.sameValue(t.length, originalTuple.length / 2);

for (var j = 0; j < originalTuple.length / 2; j++) {
    assert.sameValue(t[j], 127);
}

