// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: -0 values on start and end
info: |
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  assert.compareArray(sample.slice(-0), [40n, 41n, 42n, 43n], 'sample.slice(-0) must return [40n, 41n, 42n, 43n]');
  assert.compareArray(sample.slice(-0, 4), [40n, 41n, 42n, 43n], 'sample.slice(-0, 4) must return [40n, 41n, 42n, 43n]');
  assert.compareArray(sample.slice(0, -0), [], 'sample.slice(0, -0) must return []');
  assert.compareArray(sample.slice(-0, -0), [], 'sample.slice(-0, -0) must return []');
});
