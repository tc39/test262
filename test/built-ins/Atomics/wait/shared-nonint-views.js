// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test Atomics.wait on shared non-integer TypedArrays
---*/

var sab = new SharedArrayBuffer(1024);

var other_views = [Int8Array, Uint8Array, Int16Array, Uint16Array, Uint32Array,
                   Uint8ClampedArray, Float32Array, Float64Array];

for ( var View of other_views ) {
    var view = new View(sab);

    // Even with timout zero this should fail
    assert.throws(TypeError, (() => Atomics.wait(view, 0, 0, 0)));
}
