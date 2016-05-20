// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setfloat64
es6id: 24.2.4.14
description: >
  Detached buffer is checked after checking If numberIndex ≠ getIndex or
  getIndex < 0
info: |
  24.2.4.14 DataView.prototype.setFloat64 ( byteOffset, value [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? SetViewValue(v, byteOffset, littleEndian, "Float64", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )

  ...
  6. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
  ...
  9. Let buffer be the value of view's [[ViewedArrayBuffer]] internal slot.
  10. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  ...
includes: [detachArrayBuffer.js]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

$DETACHBUFFER(buffer);
assert.throws(RangeError, function() {
  sample.setFloat64(1.1, 0);
});

assert.throws(RangeError, function() {
  sample.setFloat64(-1, 0);
});
