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
  var sample = new TA(convertToBigInt([40, 41, 42, 43]));

  assert(compareArray(sample.slice(false), convertToBigInt([40, 41, 42, 43])), "false");
  assert(compareArray(sample.slice(true), convertToBigInt([41, 42, 43])), "true");

  assert(compareArray(sample.slice(NaN), convertToBigInt([40, 41, 42, 43])), "NaN");
  assert(compareArray(sample.slice(null), convertToBigInt([40, 41, 42, 43])), "null");
  assert(compareArray(sample.slice(undefined), convertToBigInt([40, 41, 42, 43])), "undefined");

  assert(compareArray(sample.slice(1.1), convertToBigInt([41, 42, 43])), "1.1");
  assert(compareArray(sample.slice(1.5), convertToBigInt([41, 42, 43])), "1.5");
  assert(compareArray(sample.slice(0.6), convertToBigInt([40, 41, 42, 43])), "0.6");

  assert(compareArray(sample.slice(-1.5), convertToBigInt([43])), "-1.5");
  assert(compareArray(sample.slice(-1.1), convertToBigInt([43])), "-1.1");
  assert(compareArray(sample.slice(-0.6), convertToBigInt([40, 41, 42, 43])), "-0.6");

  assert(compareArray(sample.slice("3"), convertToBigInt([43])), "string");
  assert(
    compareArray(
      sample.slice(obj),
      convertToBigInt([42, 43])
    ),
    "object"
  );
});
