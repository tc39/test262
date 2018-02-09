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

  assert(compareArray(sample.subarray(0, false), []), "false");
  assert(compareArray(sample.subarray(0, true), convertToBigInt([40])), "true");

  assert(compareArray(sample.subarray(0, NaN), []), "NaN");
  assert(compareArray(sample.subarray(0, null), []), "null");
  assert(compareArray(sample.subarray(0, undefined), convertToBigInt([40, 41, 42, 43])), "undefined");

  assert(compareArray(sample.subarray(0, 0.6), []), "0.6");
  assert(compareArray(sample.subarray(0, 1.1), convertToBigInt([40])), "1.1");
  assert(compareArray(sample.subarray(0, 1.5), convertToBigInt([40])), "1.5");
  assert(compareArray(sample.subarray(0, -0.6), []), "-0.6");
  assert(compareArray(sample.subarray(0, -1.1), convertToBigInt([40, 41, 42])), "-1.1");
  assert(compareArray(sample.subarray(0, -1.5), convertToBigInt([40, 41, 42])), "-1.5");

  assert(compareArray(sample.subarray(0, "3"), convertToBigInt([40, 41, 42])), "string");
  assert(
    compareArray(
      sample.subarray(0, obj),
      convertToBigInt([40, 41])
    ),
    "object"
  );
});
