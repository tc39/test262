// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set-typedarray-offset
description: >
  Throws a TypeError if srcBuffer is detached
info: >
  22.2.3.23.2 %TypedArray%.prototype.set(typedArray [ , offset ] )

  1. Assert: typedArray has a [[TypedArrayName]] internal slot. If it does not,
  the definition in 22.2.3.23.1 applies.
  ...
  11. Let srcBuffer be the value of typedArray's [[ViewedArrayBuffer]] internal
  slot.
  12. If IsDetachedBuffer(srcBuffer) is true, throw a TypeError exception.
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA();
  var src = new TA();
  $DETACHBUFFER(src.buffer);

  assert.throws(TypeError, function() {
    sample.set(src);
  });
});
