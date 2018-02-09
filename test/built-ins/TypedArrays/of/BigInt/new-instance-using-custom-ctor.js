// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.of
description: >
  Return a new TypedArray using a custom Constructor
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var called = 0;

  var ctor = function(len) {
    assert.sameValue(arguments.length, 1);
    called++;
    return new TA(len);
  };


  var result = TA.of.call(ctor, convertToBigInt(42), convertToBigInt(43), convertToBigInt(42));
  assert.sameValue(result.length, 3);
  assert.sameValue(result[0], convertToBigInt(42));
  assert.sameValue(result[1], convertToBigInt(43));
  assert.sameValue(result[2], convertToBigInt(42));
  assert.sameValue(result.constructor, TA);
  assert.sameValue(called, 1);
});
