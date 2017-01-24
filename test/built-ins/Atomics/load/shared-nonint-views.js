// Copyright (C) 2015 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test Atomics.load on shared non-integer TypedArrays
---*/

var sab = new SharedArrayBuffer(1024);

var other_views = [Uint8ClampedArray, Float32Array, Float64Array];

testWithTypedArrayConstructors(function(View) {
    var view = new View(sab);

    assert.throws(TypeError, (() => Atomics.load(view, 0)));
}, other_views);
