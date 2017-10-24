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

testWithTypedArrayConstructors(function(TA, N) {
  var sample = new TA(N([40, 41, 42, 43]));

  assert(compareArray(sample.subarray(0, false), []), "false");
  assert(compareArray(sample.subarray(0, true), N([40])), "true");

  assert(compareArray(sample.subarray(0, NaN), []), "NaN");
  assert(compareArray(sample.subarray(0, null), []), "null");
  assert(compareArray(sample.subarray(0, undefined), N([40, 41, 42, 43])), "undefined");

  assert(compareArray(sample.subarray(0, 0.6), []), "0.6");
  assert(compareArray(sample.subarray(0, 1.1), N([40])), "1.1");
  assert(compareArray(sample.subarray(0, 1.5), N([40])), "1.5");
  assert(compareArray(sample.subarray(0, -0.6), []), "-0.6");
  assert(compareArray(sample.subarray(0, -1.1), N([40, 41, 42])), "-1.1");
  assert(compareArray(sample.subarray(0, -1.5), N([40, 41, 42])), "-1.5");

  assert(compareArray(sample.subarray(0, "3"), N([40, 41, 42])), "string");
  assert(
    compareArray(
      sample.subarray(0, obj),
      N([40, 41])
    ),
    "object"
  );
});
