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

testWithTypedArrayConstructors(function(TA, N) {
  var sample = new TA(N([40, 41, 42, 43]));

  assert(compareArray(sample.slice(false), N([40, 41, 42, 43])), "false");
  assert(compareArray(sample.slice(true), N([41, 42, 43])), "true");

  assert(compareArray(sample.slice(NaN), N([40, 41, 42, 43])), "NaN");
  assert(compareArray(sample.slice(null), N([40, 41, 42, 43])), "null");
  assert(compareArray(sample.slice(undefined), N([40, 41, 42, 43])), "undefined");

  assert(compareArray(sample.slice(1.1), N([41, 42, 43])), "1.1");
  assert(compareArray(sample.slice(1.5), N([41, 42, 43])), "1.5");
  assert(compareArray(sample.slice(0.6), N([40, 41, 42, 43])), "0.6");

  assert(compareArray(sample.slice(-1.5), N([43])), "-1.5");
  assert(compareArray(sample.slice(-1.1), N([43])), "-1.1");
  assert(compareArray(sample.slice(-0.6), N([40, 41, 42, 43])), "-0.6");

  assert(compareArray(sample.slice("3"), N([43])), "string");
  assert(
    compareArray(
      sample.slice(obj),
      N([42, 43])
    ),
    "object"
  );
});
