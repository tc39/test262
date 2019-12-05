// Copyright (C) 2019 Google. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.copywithin
description: >
  SECURITY: end argument is coerced to an integer values
  causing array detachment, but the value is still defined
  by a prototype
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
  7. If end is undefined, let relativeEnd be len; else let relativeEnd be ?
  ToInteger(end).
  ...
includes: [compareArray.js, testTypedArray.js, detachArrayBuffer.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  
  var ta;
  var array = [];

  function detachAndReturnIndex(){
      $DETACHBUFFER(ta.buffer);
      Object.setPrototypeOf(ta, array);
      return 900;
  }

  array.length = 10000; // big arrays are more likely to cause a crash if they are accessed after they are freed
  array.fill(7, 0);
  ta = new TA(array);
  assert.throws(TypeError, function(){ 
    ta.copyWithin(0, 100, {valueOf : detachAndReturnIndex}); },
  "should thow TypeError as array is detached");
  
});
