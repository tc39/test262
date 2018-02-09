// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.map
description: >
  Integer indexed values changed during iteration
info: |
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA(convertToBigInt([42, 43, 44]));

  sample.map(function(v, i) {
    if (i < sample.length - 1) {
      sample[i+1] = convertToBigInt(42);
    }

    assert.sameValue(
      v, convertToBigInt(42), "method does not cache values before callbackfn calls"
    );

    return convertToBigInt(0);
  });
});
