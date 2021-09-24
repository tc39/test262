// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: Returns a new instance from the same constructor
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  17. Return ? TypedArraySpeciesCreate(O, argumentsList).
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  var result = sample.subarray(1);

  assert.sameValue(
    Object.getPrototypeOf(result),
    Object.getPrototypeOf(sample),
    'Object.getPrototypeOf(sample.subarray(1)) must return the same value returned by Object.getPrototypeOf(sample)'
  );

  assert.sameValue(
    result.constructor,
    sample.constructor,
    'The value of result.constructor is expected to equal the value of sample.constructor'
  );

  assert(result instanceof TA, 'The result of evaluating (result instanceof TA) is expected to be true');
  assert.compareArray(sample, [40n, 41n, 42n, 43n], 'The value of sample is expected to be [40n, 41n, 42n, 43n]');
});
