// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.reduceright
description: >
  The callbackfn return does not change the `this` instance
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA(convertToBigInt([0, 1, 0]));

  sample.reduceRight(function() {
    return 42;
  }, 7);

  assert.sameValue(sample[0], convertToBigInt(0), "[0] == 0");
  assert.sameValue(sample[1], convertToBigInt(1), "[1] == 1");
  assert.sameValue(sample[2], convertToBigInt(0), "[2] == 0");
});
