// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
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

for (let primitive of [true, 3.14, "hello", Symbol()]) {
    let prototype = Object.getPrototypeOf(primitive);

    Object.defineProperty(prototype, Symbol.iterator, {
        configurable: true,
        get() {
            "use strict";
            assert.sameValue(this, primitive);
            return () => [this][Symbol.iterator]();
        },
    });
    assert.sameValue(Array.from(primitive)[0], primitive);

    delete prototype[Symbol.iterator];
}

