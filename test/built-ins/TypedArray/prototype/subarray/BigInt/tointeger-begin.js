// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: ToInteger(begin)
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  7. Let relativeBegin be ? ToInteger(begin).
  ...
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/
var obj = {
  valueOf: function() {
    return 2;
  }
};

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);

  assert.compareArray(
    sample.subarray(false),
    [40n, 41n, 42n, 43n],
    'sample.subarray(false) must return [40n, 41n, 42n, 43n]'
  );

  assert.compareArray(sample.subarray(true), [41n, 42n, 43n], 'sample.subarray(true) must return [41n, 42n, 43n]');
  assert.compareArray(sample.subarray(NaN), [40n, 41n, 42n, 43n], 'sample.subarray(NaN) must return [40n, 41n, 42n, 43n]');

  assert.compareArray(
    sample.subarray(null),
    [40n, 41n, 42n, 43n],
    'sample.subarray(null) must return [40n, 41n, 42n, 43n]'
  );

  assert.compareArray(
    sample.subarray(undefined),
    [40n, 41n, 42n, 43n],
    'sample.subarray(undefined) must return [40n, 41n, 42n, 43n]'
  );

  assert.compareArray(sample.subarray(1.1), [41n, 42n, 43n], 'sample.subarray(1.1) must return [41n, 42n, 43n]');
  assert.compareArray(sample.subarray(1.5), [41n, 42n, 43n], 'sample.subarray(1.5) must return [41n, 42n, 43n]');
  assert.compareArray(sample.subarray(0.6), [40n, 41n, 42n, 43n], 'sample.subarray(0.6) must return [40n, 41n, 42n, 43n]');
  assert.compareArray(sample.subarray(-1.5), [43n], 'sample.subarray(-1.5) must return [43n]');
  assert.compareArray(sample.subarray(-1.1), [43n], 'sample.subarray(-1.1) must return [43n]');

  assert.compareArray(
    sample.subarray(-0.6),
    [40n, 41n, 42n, 43n],
    'sample.subarray(-0.6) must return [40n, 41n, 42n, 43n]'
  );

  assert.compareArray(sample.subarray('3'), [43n], 'sample.subarray("3") must return [43n]');

  assert.compareArray(
    sample.subarray(obj),
    [42n, 43n],
    'sample.subarray({valueOf: function() {return 2;}}) must return [42n, 43n]'
  );
});
