// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.xor
description: >
  Test range checking of Atomics.xor on arrays that allow atomic operations
includes: [testAtomics.js, testBigIntTypedArray.js]
features: [ArrayBuffer, arrow-function, Atomics, BigInt, DataView, for-of, let, SharedArrayBuffer, TypedArray]
---*/

var sab = new SharedArrayBuffer(8);

testWithBigIntTypedArrayConstructors(function(TA) {
  let view = new TA(sab);
  testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    assert.throws(RangeError, () => Atomics.xor(view, IdxGen(view), 0));
  });
});
