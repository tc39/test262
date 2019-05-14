// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.add
description: >
  Test Atomics.add on shared non-integer TypedArrays
includes: [testTypedArray.js]
features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

var buffer = new SharedArrayBuffer(1024);

testWithTypedArrayConstructors(function(TA) {
  assert.throws(TypeError, (() => Atomics.add(new TA(buffer), 0, 0)));
}, floatArrayConstructors);
