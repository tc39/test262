// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.sub
description: >
  Test range checking of Atomics.sub on arrays that allow atomic operations
includes: [testAtomics.js, testBigIntTypedArray.js]
features: [ArrayBuffer, arrow-function, Atomics, BigInt, DataView, for-of, let, SharedArrayBuffer, TypedArray]
---*/

var buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 2);

testWithBigIntTypedArrayConstructors(function(TA) {
  let view = new TA(buffer);
  testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    assert.throws(RangeError, function() {
      Atomics.sub(view, IdxGen(view), 10);
    }, 'Atomics.sub(view, IdxGen(view), 10) throws RangeError');
  });
});
