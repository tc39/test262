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
  var sample = new TA(convertToBigInt([40, 41, 42, 43]));
  var result = sample.subarray(1);

  assert.sameValue(
    Object.getPrototypeOf(result),
    Object.getPrototypeOf(sample),
    "prototype"
  );
  assert.sameValue(result.constructor, sample.constructor, "constructor");
  assert(result instanceof TA, "instanceof");

  assert(
    compareArray(sample, convertToBigInt([40, 41, 42, 43])),
    "original sample remains the same"
  );
});
