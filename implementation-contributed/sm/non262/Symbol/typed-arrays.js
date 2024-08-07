// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Symbol-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// Symbol-to-number type conversions involving typed arrays.

for (var T of [Uint8Array, Uint8ClampedArray, Int16Array, Float32Array]) {
    // Typed array constructors convert symbols using ToNumber(), which throws.
    assertThrowsInstanceOf(() => new T([Symbol("a")]), TypeError);

    // Assignment does the same.
    var arr = new T([1]);
    assertThrowsInstanceOf(() => { arr[0] = Symbol.iterator; }, TypeError);
    assert.sameValue(arr[0], 1);
}

