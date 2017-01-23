// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test Atomics.xor on non-shared integer TypedArrays
---*/

var ab = new ArrayBuffer(16);

var int_views = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array];

for ( var View of int_views ) {
    var view = new View(ab);

    assert.throws(TypeError, (() => Atomics.xor(view, 0, 0)));
}
