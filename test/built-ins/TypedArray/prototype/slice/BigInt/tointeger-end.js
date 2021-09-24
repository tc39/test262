// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: ToInteger(end)
info: |
  22.2.3.24 %TypedArray%.prototype.slice( start , end )

  ...
  6. If end is undefined, let relativeEnd be len; else let relativeEnd be ?
  ToInteger(end).
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
  assert.compareArray(sample.slice(0, false), [], 'sample.slice(0, false) must return []');
  assert.compareArray(sample.slice(0, true), [40n], 'sample.slice(0, true) must return [40n]');
  assert.compareArray(sample.slice(0, NaN), [], 'sample.slice(0, NaN) must return []');
  assert.compareArray(sample.slice(0, null), [], 'sample.slice(0, null) must return []');

  assert.compareArray(
    sample.slice(0, undefined),
    [40n, 41n, 42n, 43n],
    'sample.slice(0, undefined) must return [40n, 41n, 42n, 43n]'
  );

  assert.compareArray(sample.slice(0, 0.6), [], 'sample.slice(0, 0.6) must return []');
  assert.compareArray(sample.slice(0, 1.1), [40n], 'sample.slice(0, 1.1) must return [40n]');
  assert.compareArray(sample.slice(0, 1.5), [40n], 'sample.slice(0, 1.5) must return [40n]');
  assert.compareArray(sample.slice(0, -0.6), [], 'sample.slice(0, -0.6) must return []');
  assert.compareArray(sample.slice(0, -1.1), [40n, 41n, 42n], 'sample.slice(0, -1.1) must return [40n, 41n, 42n]');
  assert.compareArray(sample.slice(0, -1.5), [40n, 41n, 42n], 'sample.slice(0, -1.5) must return [40n, 41n, 42n]');
  assert.compareArray(sample.slice(0, '3'), [40n, 41n, 42n], 'sample.slice(0, "3") must return [40n, 41n, 42n]');

  assert.compareArray(
    sample.slice(0, obj),
    [40n, 41n],
    'sample.slice(0, {valueOf: function() {return 2;}}) must return [40n, 41n]'
  );
});
