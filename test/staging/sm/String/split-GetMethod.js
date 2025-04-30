// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [compareArray.js]
flags:
  - noStrict
description: |
  String.prototype.split should call GetMethod.
esid: pending
---*/

function create(value) {
    return {
        [Symbol.split]: value,
        toString() {
            return "-";
        }
    };
}

for (let v of [null, undefined]) {
    assert.compareArray("a-a".split(create(v)), ["a", "a"]);
}

for (let v of [1, true, Symbol.iterator, "", {}, []]) {
    assert.throws(TypeError, () => "a-a".split(create(v)));
}
