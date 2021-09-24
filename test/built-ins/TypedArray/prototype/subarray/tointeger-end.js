// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: ToInteger(end)
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )

  ...
  9. If end is undefined, let relativeEnd be srcLength; else, let relativeEnd be
  ? ToInteger(end).
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

var obj = {
  valueOf: function() {
    return 2;
  }
};

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42, 43]);

  assert.compareArray(sample.subarray(0, false), [], 'sample.subarray(0, false) must return []');
  assert.compareArray(sample.subarray(0, true), [40], 'sample.subarray(0, true) must return [40]');

  assert.compareArray(sample.subarray(0, NaN), [], 'sample.subarray(0, NaN) must return []');
  assert.compareArray(sample.subarray(0, null), [], 'sample.subarray(0, null) must return []');
  assert.compareArray(sample.subarray(0, undefined), [40, 41, 42, 43], 'sample.subarray(0, undefined) must return [40, 41, 42, 43]');

  assert.compareArray(sample.subarray(0, 0.6), [], 'sample.subarray(0, 0.6) must return []');
  assert.compareArray(sample.subarray(0, 1.1), [40], 'sample.subarray(0, 1.1) must return [40]');
  assert.compareArray(sample.subarray(0, 1.5), [40], 'sample.subarray(0, 1.5) must return [40]');
  assert.compareArray(sample.subarray(0, -0.6), [], 'sample.subarray(0, -0.6) must return []');
  assert.compareArray(sample.subarray(0, -1.1), [40, 41, 42], 'sample.subarray(0, -1.1) must return [40, 41, 42]');
  assert.compareArray(sample.subarray(0, -1.5), [40, 41, 42], 'sample.subarray(0, -1.5) must return [40, 41, 42]');

  assert.compareArray(sample.subarray(0, "3"), [40, 41, 42], 'sample.subarray(0, 3) must return [40, 41, 42]');
  assert.compareArray(sample.subarray(0, obj), [40, 41], 'sample.subarray(0, {valueOf: function() {return 2;}}) must return [40, 41]');
});
