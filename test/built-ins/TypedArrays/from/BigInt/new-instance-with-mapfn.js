// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.from
description: >
  Return a new TypedArray using mapfn
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

var source = [42, 43, 42];

testWithBigIntTypedArrayConstructors(function(TA) {
  var mapfn = function(kValue) {
    return convertToBigInt(kValue * 2);
  };

  var result = TA.from(source, mapfn);
  assert.sameValue(result.length, 3);
  assert.sameValue(result[0], convertToBigInt(84));
  assert.sameValue(result[1], convertToBigInt(86));
  assert.sameValue(result[2], convertToBigInt(84));
  assert.sameValue(result.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(result), TA.prototype);
});
