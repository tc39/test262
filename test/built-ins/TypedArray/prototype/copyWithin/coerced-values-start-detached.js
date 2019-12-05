// Copyright (C) 2019 Google. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.copywithin
description: >
  SECURITY: start argument is coerced to an integer value, which detached
  the array
info: |
  22.2.3.5 %TypedArray%.prototype.copyWithin (target, start [ , end ] )

  %TypedArray%.prototype.copyWithin is a distinct function that implements the
  same algorithm as Array.prototype.copyWithin as defined in 22.1.3.3 except
  that the this object's [[ArrayLength]] internal slot is accessed in place of
  performing a [[Get]] of "length" and the actual copying of values in step 12
  must be performed in a manner that preserves the bit-level encoding of the
  source data.

  ...

  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  ...
  5. Let relativeStart be ? ToInteger(start).
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  
  var ta;
  function detachAndReturnIndex(){
      $DETACHBUFFER(ta.buffer);
      return 100;
  }

  var array = [];
  array.length = 10000; // big arrays are more likely to cause a crash if they are accessed after they are freed
  array.fill(7, 0);
  ta = new TA(array);
  ta.copyWithin(0, {valueOf : detachAndReturnIndex}, 1000);
  assert.sameValue(ta.length, 0, "Detached array has elements")
});
