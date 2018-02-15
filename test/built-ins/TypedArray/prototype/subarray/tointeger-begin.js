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
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

var obj = {
  valueOf: function() {
    return 2;
  }
};

testWithTypedArrayConstructors(function(TA, N) {
  var sample = new TA(N([40, 41, 42, 43]));

  assert(compareArray(sample.subarray(false), N([40, 41, 42, 43])), "false");
  assert(compareArray(sample.subarray(true), N([41, 42, 43])), "true");

  assert(compareArray(sample.subarray(NaN), N([40, 41, 42, 43])), "NaN");
  assert(compareArray(sample.subarray(null), N([40, 41, 42, 43])), "null");
  assert(compareArray(sample.subarray(undefined), N([40, 41, 42, 43])), "undefined");

  assert(compareArray(sample.subarray(1.1), N([41, 42, 43])), "1.1");
  assert(compareArray(sample.subarray(1.5), N([41, 42, 43])), "1.5");
  assert(compareArray(sample.subarray(0.6), N([40, 41, 42, 43])), "0.6");

  assert(compareArray(sample.subarray(-1.5), N([43])), "-1.5");
  assert(compareArray(sample.subarray(-1.1), N([43])), "-1.1");
  assert(compareArray(sample.subarray(-0.6), N([40, 41, 42, 43])), "-0.6");

  assert(compareArray(sample.subarray("3"), N([43])), "string");
  assert(
    compareArray(
      sample.subarray(obj),
      N([42, 43])
    ),
    "object"
  );
});
