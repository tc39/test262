// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set-array-offset
description: >
  Values from src array are not cached
info: |
  22.2.3.23.1 %TypedArray%.prototype.set (array [ , offset ] )

  1. Assert: array is any ECMAScript language value other than an Object with a
  [[TypedArrayName]] internal slot. If it is such an Object, the definition in
  22.2.3.23.2 applies.
  ...
  21. Repeat, while targetByteIndex < limit
    a. Let Pk be ! ToString(k).
    b. Let kNumber be ? ToNumber(? Get(src, Pk)).
    c. If IsDetachedBuffer(targetBuffer) is true, throw a TypeError exception.
    d. Perform SetValueInBuffer(targetBuffer, targetByteIndex, targetType,
    kNumber).
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA, N) {
  var sample = new TA(5);
  var obj = {
    length: 5,
    '1': N(7),
    '2': N(7),
    '3': N(7),
    '4': N(7)
  };
  Object.defineProperty(obj, 0, {
    get: function() {
      obj[1] = N(43);
      obj[2] = N(44);
      obj[3] = N(45);
      obj[4] = N(46);
      return N(42);
    }
  });

  sample.set(obj);

  assert(compareArray(sample, N([42, 43, 44, 45, 46])));
});
