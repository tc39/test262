// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.sub
description: >
  Test Atomics.sub on non-shared integer TypedArrays
includes: [testBigIntTypedArray.js]
features: [ArrayBuffer, arrow-function, Atomics, BigInt, TypedArray]
---*/

var buffer = new ArrayBuffer(16);

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.throws(TypeError, (() => Atomics.sub(new TA(buffer), 0, 0)));
});
