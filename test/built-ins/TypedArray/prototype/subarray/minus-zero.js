// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: -0 values on begin and end
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42, 43]);

  assert.compareArray(
    sample.subarray(-0), [40, 41, 42, 43],
    'sample.subarray(-0) must return [40, 41, 42, 43]'
  );
  assert.compareArray(
    sample.subarray(-0, 4), [40, 41, 42, 43],
    'sample.subarray(-0, 4) must return [40, 41, 42, 43]'
  );
  assert.compareArray(
    sample.subarray(0, -0), [],
    'sample.subarray(0, -0) must return []'
  );
  assert.compareArray(
    sample.subarray(-0, -0), [],
    'sample.subarray(-0, -0) must return []'
  );
});
