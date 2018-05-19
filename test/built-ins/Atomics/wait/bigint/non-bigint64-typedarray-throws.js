// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Throws a TypeError if typedArray arg is not an BigInt64Array
info: |
  Atomics.wait( typedArray, index, value, timeout )

  1.Let buffer be ? ValidateSharedIntegerTypedArray(typedArray, true).
    ...
      5.If onlyBigInt64 is true, then
        If typeName is not "BigInt64Array" or "BigInt64Array", throw a TypeError exception.
features: [Atomics, Float32Array, Float64Array, Int8Array, TypedArray, Uint16Array, Uint8Array, Uint8ClampedArray]
includes: [testAtomics.js, testBigIntTypedArray.js]
---*/

var poisoned = {
  valueOf: function() {
    throw new Test262Error("should not evaluate this code");
  }
};

assert.throws(TypeError, function() {
  Atomics.wait(new BigUint64Array(), poisoned, poisoned, poisoned);
}, 'BigUint64Array');

