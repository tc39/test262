// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: ToInteger(begin)
info: |
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )

  ...
  4. Let relativeStart be ? ToInteger(start).
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

  assert.compareArray(sample.slice(false), [40, 41, 42, 43], 'sample.slice(false) must return [40, 41, 42, 43]');
  assert.compareArray(sample.slice(true), [41, 42, 43], 'sample.slice(true) must return [41, 42, 43]');

  assert.compareArray(sample.slice(NaN), [40, 41, 42, 43], 'sample.slice(NaN) must return [40, 41, 42, 43]');
  assert.compareArray(sample.slice(null), [40, 41, 42, 43], 'sample.slice(null) must return [40, 41, 42, 43]');
  assert.compareArray(sample.slice(undefined), [40, 41, 42, 43], 'sample.slice(undefined) must return [40, 41, 42, 43]');

  assert.compareArray(sample.slice(1.1), [41, 42, 43], 'sample.slice(1.1) must return [41, 42, 43]');
  assert.compareArray(sample.slice(1.5), [41, 42, 43], 'sample.slice(1.5) must return [41, 42, 43]');
  assert.compareArray(sample.slice(0.6), [40, 41, 42, 43], 'sample.slice(0.6) must return [40, 41, 42, 43]');

  assert.compareArray(sample.slice(-1.5), [43], 'sample.slice(-1.5) must return [43]');
  assert.compareArray(sample.slice(-1.1), [43], 'sample.slice(-1.1) must return [43]');
  assert.compareArray(sample.slice(-0.6), [40, 41, 42, 43], 'sample.slice(-0.6) must return [40, 41, 42, 43]');

  assert.compareArray(sample.slice("3"), [43], 'sample.slice("3") must return [43]');
  assert.compareArray(sample.slice(obj), [42, 43], 'sample.slice({valueOf: function() {return 2;}}) must return [42, 43]');
});
