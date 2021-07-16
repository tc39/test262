// Copyright (C) 2016 the V8 project authors. All rights reserved.
// Copyright (C) 2021 Apple Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findlastindex
description: >
  Predicate may detach the buffer
info: |
  %TypedArray%.prototype.findLastIndex ( predicate [ , thisArg ] )

  ...
  6. Repeat, while k ≥ 0,
    a. Let Pk be ! ToString(𝔽(k)).
    b. Let kValue be ! Get(O, Pk).
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
  ...

  IntegerIndexedElementGet ( O, index )

    Let buffer be the value of O's [[ViewedArrayBuffer]] internal slot.
    If IsDetachedBuffer(buffer) is true, return undefined.

includes: [testBigIntTypedArray.js, detachArrayBuffer.js]
features: [BigInt, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA(2);
  var loops = 0;

  sample.findLastIndex(function() {
    if (loops === 0) {
      $DETACHBUFFER(sample.buffer);
    }
    loops++;
  });
  assert.sameValue(loops, 2, "predicate is called once");
});
