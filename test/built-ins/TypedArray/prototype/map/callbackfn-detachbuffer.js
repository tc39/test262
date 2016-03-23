// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.map
description: >
  Instance buffer can be detached during loop
info: >
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  ...
  8. Repeat, while k < len
    ...
    b. Let kValue be ? Get(O, Pk).
    c. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
  ...
includes: [detachArrayBuffer.js, testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var loops = 0;
  var sample = new TA(2);

  assert.throws(TypeError, function() {
    sample.map(function() {
      loops++;
      $DETACHBUFFER(sample.buffer);
      return 1;
    });
  });

  assert.sameValue(loops, 1, "callbackfn called only once");
  assert.sameValue(loop[0], 0, "returned value is not set");
});
