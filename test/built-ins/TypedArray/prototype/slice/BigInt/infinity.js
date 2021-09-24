// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: Infinity values on start and end
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);

  assert.compareArray(
    sample.slice(-Infinity),
    [40n, 41n, 42n, 43n],
    'sample.slice(-Infinity) must return [40n, 41n, 42n, 43n]'
  );

  assert.compareArray(sample.slice(Infinity), [], 'sample.slice(Infinity) must return []');
  assert.compareArray(sample.slice(0, -Infinity), [], 'sample.slice(0, -Infinity) must return []');

  assert.compareArray(
    sample.slice(0, Infinity),
    [40n, 41n, 42n, 43n],
    'sample.slice(0, Infinity) must return [40n, 41n, 42n, 43n]'
  );
});
