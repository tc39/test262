// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.load
description: >
  Atomics.load throws when operating on non-sharable integer TypedArrays
includes: [testBigIntTypedArray.js]
features: [ArrayBuffer, Atomics, BigInt, TypedArray]
---*/

const buffer = new ArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4);

testWithNonShareableBigIntTypedArrayConstructors(function(TA) {
  const view = new TA(buffer);
  assert.throws(TypeError, function() {
    Atomics.load(view, 0);
  }, `Atomics.load(new ${TA.name}(buffer), 0) throws TypeError`);
});
