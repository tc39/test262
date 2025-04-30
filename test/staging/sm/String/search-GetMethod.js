// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  String.prototype.search should call GetMethod.
esid: pending
---*/

function create(value) {
    return {
        [Symbol.search]: value,
        toString() {
            return "-";
        }
    };
}

for (let v of [null, undefined]) {
    assert.sameValue("a-a".search(create(v)), 1);
}

for (let v of [1, true, Symbol.iterator, "", {}, []]) {
    assert.throws(TypeError, () => "a-a".search(create(v)));
}
