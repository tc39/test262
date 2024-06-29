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
---*/var array = [Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
var arrayIndex = -1;

function mapFn(value, index) {
    this.arrayIndex++;
    assert.sameValue(value, array[this.arrayIndex]);
    assert.sameValue(index, this.arrayIndex);
    return value;
}

var t = Tuple.from(array, mapFn, this);

assert.sameValue(t.length, array.length);
assert.sameValue(t[0], Number.MAX_VALUE);
assert.sameValue(t[1], Number.MIN_VALUE);
assert.sameValue(t[2], Number.NaN);
assert.sameValue(t[3], Number.NEGATIVE_INFINITY);
assert.sameValue(t[4], Number.POSITIVE_INFINITY);

