// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: Returns a new instance sharing the same buffer
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  17. Return ? TypedArraySpeciesCreate(O, argumentsList).
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42, 43]);
  var buffer = sample.buffer;
  var result = sample.subarray(1);

  assert.notSameValue(result, sample, 'The value of result is expected to not equal the value of `sample`');
  assert.sameValue(result.buffer, sample.buffer, 'The value of result.buffer is expected to equal the value of sample.buffer');
  assert.sameValue(sample.buffer, buffer, 'The value of sample.buffer is expected to equal the value of buffer');

  sample[1] = 100;
  assert.compareArray(
    result, [100, 42, 43],
    'The value of result is expected to be [100, 42, 43]'
  );

  result[1] = 111;
  assert.compareArray(
    sample, [40, 100, 111, 43],
    'The value of sample is expected to be [40, 100, 111, 43]'
  );
});
