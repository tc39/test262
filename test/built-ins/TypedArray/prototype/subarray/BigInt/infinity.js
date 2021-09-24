// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: Infinity values on begin and end
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);

  assert.compareArray(
    sample.subarray(-Infinity),
    [40n, 41n, 42n, 43n],
    'sample.subarray(-Infinity) must return [40n, 41n, 42n, 43n]'
  );

  assert.compareArray(sample.subarray(Infinity), [], 'sample.subarray(Infinity) must return []');
  assert.compareArray(sample.subarray(0, -Infinity), [], 'sample.subarray(0, -Infinity) must return []');

  assert.compareArray(
    sample.subarray(0, Infinity),
    [40n, 41n, 42n, 43n],
    'sample.subarray(0, Infinity) must return [40n, 41n, 42n, 43n]'
  );
});
