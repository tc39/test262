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
  var sample = new TA(convertToBigInt([40, 41, 42, 43]));

  assert(
    compareArray(sample.slice(-0), convertToBigInt([40, 41, 42, 43])),
    "start == -0"
  );
  assert(
    compareArray(sample.slice(-0, 4), convertToBigInt([40, 41, 42, 43])),
    "start == -0, end == length"
  );
  assert(
    compareArray(sample.slice(0, -0), []),
    "start == 0, end == -0"
  );
  assert(
    compareArray(sample.slice(-0, -0), []),
    "start == -0, end == -0"
  );
});
