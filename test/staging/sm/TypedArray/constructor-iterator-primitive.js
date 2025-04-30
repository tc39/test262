// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  Returning non-object from @@iterator should throw
esid: pending
---*/

let primitives = [
    1,
    true,
    undefined,
    null,
    "foo",
    Symbol.iterator
];

for (let ctor of typedArrayConstructors) {
    for (let primitive of primitives) {
        let arg = {
            [Symbol.iterator]() {
                return primitive;
            }
        };
        assert.throws(TypeError, () => {
            new ctor(arg);
        });
    }
}
