// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set-array-offset
description: >
  ToInteger(offset) operations
info: |
  22.2.3.23.1 %TypedArray%.prototype.set (array [ , offset ] )

  1. Assert: array is any ECMAScript language value other than an Object with a
  [[TypedArrayName]] internal slot. If it is such an Object, the definition in
  22.2.3.23.2 applies.
  ...
  6. Let targetOffset be ? ToInteger(offset).
  7. If targetOffset < 0, throw a RangeError exception.
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample;

  sample = new TA([1, 2]);
  sample.set([42], "");
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], "0");
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], false);
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], 0.1);
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], 0.9);
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], -0.5);
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], 1.1);
  assert.compareArray(sample, [1, 42], 'The value of sample is expected to be [1, 42]');

  sample = new TA([1, 2]);
  sample.set([42], NaN);
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], null);
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], undefined);
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], {});
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], []);
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], [0]);
  assert.compareArray(sample, [42, 2], 'The value of sample is expected to be [42, 2]');

  sample = new TA([1, 2]);
  sample.set([42], true);
  assert.compareArray(sample, [1, 42], 'The value of sample is expected to be [1, 42]');

  sample = new TA([1, 2]);
  sample.set([42], "1");
  assert.compareArray(sample, [1, 42], 'The value of sample is expected to be [1, 42]');

  sample = new TA([1, 2]);
  sample.set([42], [1]);
  assert.compareArray(sample, [1, 42], 'The value of sample is expected to be [1, 42]');

  sample = new TA([1, 2]);
  sample.set([42], { valueOf: function() {return 1;} });
  assert.compareArray(sample, [1, 42], 'The value of sample is expected to be [1, 42]');

  sample = new TA([1, 2]);
  sample.set([42], { toString: function() {return 1;} });
  assert.compareArray(sample, [1, 42], 'The value of sample is expected to be [1, 42]');
});
