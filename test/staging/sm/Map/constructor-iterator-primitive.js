// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1021835;
var summary = "Returning non-object from @@iterator should throw";

print(BUGNUMBER + ": " + summary);

let ctors = [
    Map,
    Set,
    WeakMap,
    WeakSet
];

let primitives = [
    1,
    true,
    undefined,
    null,
    "foo",
    Symbol.iterator
];

for (let ctor of ctors) {
    for (let primitive of primitives) {
        let arg = {
            [Symbol.iterator]() {
                return primitive;
            }
        };
        assertThrowsInstanceOf(() => new ctor(arg), TypeError);
    }
}

