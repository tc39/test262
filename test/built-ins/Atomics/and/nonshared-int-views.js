// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.and
description: >
  Test Atomics.and on non-shared integer TypedArrays
includes: [testTypedArray.js]
features: [ArrayBuffer, Atomics, TypedArray]
---*/

var buffer = new ArrayBuffer(16);
var views = intArrayConstructors.slice();

testWithTypedArrayConstructors(function(TA) {
  assert.throws(
    TypeError,
    () => Atomics.and(new TA(buffer), 0, 0),
    'Atomics.and(new TA(buffer), 0, 0) throws TypeError'
  );
}, views);
