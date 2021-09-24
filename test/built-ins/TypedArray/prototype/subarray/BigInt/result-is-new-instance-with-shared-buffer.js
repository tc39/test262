// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: Returns a new instance sharing the same buffer
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  17. Return ? TypedArraySpeciesCreate(O, argumentsList).
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  var buffer = sample.buffer;
  var result = sample.subarray(1);
  assert.notSameValue(result, sample, 'The value of result is expected to not equal the value of `sample`');

  assert.sameValue(
    result.buffer,
    sample.buffer,
    'The value of result.buffer is expected to equal the value of sample.buffer'
  );

  assert.sameValue(sample.buffer, buffer, 'The value of sample.buffer is expected to equal the value of buffer');
  sample[1] = 100n;
  assert.compareArray(result, [100n, 42n, 43n], 'The value of result is expected to be [100n, 42n, 43n]');
  result[1] = 111n;
  assert.compareArray(sample, [40n, 100n, 111n, 43n], 'The value of sample is expected to be [40n, 100n, 111n, 43n]');
});
