// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
- non262-Array-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
"use strict";

// Primitive values should never be tried to spread
let primitives = [
    10,
    false,
    Symbol()
    // Can't change String.prototype.length
];

for (let value of primitives) {
    let prototype = Object.getPrototypeOf(value);
    prototype[Symbol.isConcatSpreadable] = true;

    Object.defineProperty(prototype, "length", {
        configurable: true,
        get() {
            // Should never invoke length getter
            assert.sameValue(true, false);
        },
    });

    let x = [1, 2].concat(value);
    assert.deepEqual(x, [1, 2, value]);

    delete prototype[Symbol.isConcatSpreadable];
    delete prototype.length;

    prototype.length;
}

