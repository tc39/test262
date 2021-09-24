// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.subarray
description: Infinity values on begin and end
info: |
  22.2.3.27 %TypedArray%.prototype.subarray( begin , end )
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42, 43]);

  assert.compareArray(
    sample.subarray(-Infinity), [40, 41, 42, 43],
    'sample.subarray(-Infinity) must return [40, 41, 42, 43]'
  );
  assert.compareArray(
    sample.subarray(Infinity), [],
    'sample.subarray(Infinity) must return []'
  );
  assert.compareArray(
    sample.subarray(0, -Infinity), [],
    'sample.subarray(0, -Infinity) must return []'
  );
  assert.compareArray(
    sample.subarray(0, Infinity), [40, 41, 42, 43],
    'sample.subarray(0, Infinity) must return [40, 41, 42, 43]'
  );
});
