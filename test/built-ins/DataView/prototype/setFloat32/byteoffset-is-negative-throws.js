// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setfloat32
es6id: 24.2.4.13
description: >
  Throws a RangeError if getIndex < 0
info: |
  24.2.4.13 DataView.prototype.setFloat32 ( byteOffset, value [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? SetViewValue(v, byteOffset, littleEndian, "Float32", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )

  ...
  4. Let numberIndex be ? ToNumber(requestIndex).
  5. Let getIndex be ToInteger(numberIndex).
  6. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
  ...
features: [DataView.prototype.getFloat32]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

assert.throws(RangeError, function() {
  sample.setFloat32(-1, 39);
}, "-1");
assert.sameValue(sample.getFloat32(0), 0, "-1 - no value was set");

assert.throws(RangeError, function() {
  sample.setFloat32(-Infinity, 39);
}, "-Infinity");
assert.sameValue(sample.getFloat32(0), 0, "-Infinity - no value was set");
