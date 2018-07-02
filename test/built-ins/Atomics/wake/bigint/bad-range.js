// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wake
description: >
  Test range checking of Atomics.wake on arrays that allow atomic operations
info: |
  Atomics.wake( typedArray, index, count )

  1. Let buffer be ? ValidateSharedIntegerTypedArray(typedArray, true).
  ..

includes: [testAtomics.js]
features: [ArrayBuffer, Atomics, BigInt, DataView, SharedArrayBuffer, Symbol, TypedArray]
---*/

const i64a = new BigInt64Array(
  new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 8)
);

testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
  assert.throws(RangeError, function() {
    Atomics.wake(i64a, IdxGen(i64a), 0);
  }, '`Atomics.wake(i64a, IdxGen(i64a), 0)` throws RangeError');
});
