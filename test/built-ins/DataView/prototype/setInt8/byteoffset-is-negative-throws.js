// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setint8
es6id: 24.2.4.15
description: >
  Throws a RangeError if getIndex < 0
info: |
  24.2.4.15 DataView.prototype.setInt8 ( byteOffset, value )

  1. Let v be the this value.
  2. Return ? SetViewValue(v, byteOffset, true, "Int8", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )

  ...
  4. Let numberIndex be ? ToNumber(requestIndex).
  5. Let getIndex be ToInteger(numberIndex).
  6. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
  ...
features: [DataView.prototype.getInt8]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

assert.throws(RangeError, function() {
  sample.setInt8(-1, 39);
}, "-1");
assert.sameValue(sample.getInt8(0), 0, "-1 - no value was set");

assert.throws(RangeError, function() {
  sample.setInt8(-Infinity, 39);
}, "-Infinity");
assert.sameValue(sample.getInt8(0), 0, "-Infinity - no value was set");
