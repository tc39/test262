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
  assert.compareArray(sample.slice(false), [40n, 41n, 42n, 43n], 'sample.slice(false) must return [40n, 41n, 42n, 43n]');
  assert.compareArray(sample.slice(true), [41n, 42n, 43n], 'sample.slice(true) must return [41n, 42n, 43n]');
  assert.compareArray(sample.slice(NaN), [40n, 41n, 42n, 43n], 'sample.slice(NaN) must return [40n, 41n, 42n, 43n]');
  assert.compareArray(sample.slice(null), [40n, 41n, 42n, 43n], 'sample.slice(null) must return [40n, 41n, 42n, 43n]');

  assert.compareArray(
    sample.slice(undefined),
    [40n, 41n, 42n, 43n],
    'sample.slice(undefined) must return [40n, 41n, 42n, 43n]'
  );

  assert.compareArray(sample.slice(1.1), [41n, 42n, 43n], 'sample.slice(1.1) must return [41n, 42n, 43n]');
  assert.compareArray(sample.slice(1.5), [41n, 42n, 43n], 'sample.slice(1.5) must return [41n, 42n, 43n]');
  assert.compareArray(sample.slice(0.6), [40n, 41n, 42n, 43n], 'sample.slice(0.6) must return [40n, 41n, 42n, 43n]');
  assert.compareArray(sample.slice(-1.5), [43n], 'sample.slice(-1.5) must return [43n]');
  assert.compareArray(sample.slice(-1.1), [43n], 'sample.slice(-1.1) must return [43n]');
  assert.compareArray(sample.slice(-0.6), [40n, 41n, 42n, 43n], 'sample.slice(-0.6) must return [40n, 41n, 42n, 43n]');
  assert.compareArray(sample.slice('3'), [43n], 'sample.slice("3") must return [43n]');

  assert.compareArray(
    sample.slice(obj),
    [42n, 43n],
    'sample.slice({valueOf: function() {return 2;}}) must return [42n, 43n]'
  );
});
