// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.compareexchange
description: >
  Test Atomics.compareExchange on non-shared integer TypedArrays
includes: [testBigIntTypedArray.js]
features: [ArrayBuffer, arrow-function, Atomics, BigInt, TypedArray]
---*/

var buffer = new ArrayBuffer(16);

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.throws(TypeError, function() {
    Atomics.compareExchange(new TA(buffer), 0, 0, 0);
  }, 'Atomics.compareExchange(new TA(buffer), 0, 0, 0) throws TypeError');
});
