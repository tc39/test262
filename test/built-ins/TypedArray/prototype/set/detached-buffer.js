// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set
description: Throws a TypeError if this has a detached buffer
info: >
  22.2.3.23 %TypedArray%.prototype.set ( overloaded [ , offset ])

  22.2.3.23.1 %TypedArray%.prototype.set (array [ , offset ] )

  ...
  9. If IsDetachedBuffer(targetBuffer) is true, throw a TypeError exception.
  ...

  22.2.3.23.2 %TypedArray%.prototype.set(typedArray [ , offset ] )

  ...
  9. If IsDetachedBuffer(targetBuffer) is true, throw a TypeError exception.
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA();
  $DETACHBUFFER(sample.buffer);
  assert.throws(TypeError, function() {
    sample.set([]);
  }, "argument is an array");

  assert.throws(TypeError, function() {
    sample.set(sample);
  }, "argument is a TypedArray object");
});
