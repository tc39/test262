// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getint16
es6id: 24.2.4.8
description: >
  Return values using coerced ToInteger byteOffset values
info: |
  24.2.4.8 DataView.prototype.getInt16 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Int16").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  14. Let bufferIndex be getIndex + viewOffset.
  15. Return GetValueFromBuffer(buffer, bufferIndex, type, isLittleEndian).
  ...

  24.1.1.5 GetValueFromBuffer ( arrayBuffer, byteIndex, type [ , isLittleEndian
  ] )

  ...
  8. If isLittleEndian is false, reverse the order of the elements of rawValue.
  ...
features: [DataView.prototype.setUint8]
---*/

var buffer = new ArrayBuffer(3);
var sample = new DataView(buffer, 0);

sample.setUint8(0, 127);
sample.setUint8(1, 255);
sample.setUint8(2, 1);

assert.sameValue(sample.getInt16("", false), 32767, "'', false");
assert.sameValue(sample.getInt16("", true), -129, "'', true");

assert.sameValue(sample.getInt16("0", false), 32767, "'0', false");
assert.sameValue(sample.getInt16("0", true), -129, "'0', true");

assert.sameValue(sample.getInt16("1", false), -255, "'1', false");
assert.sameValue(sample.getInt16("1", true), 511, "'1', true");

var obj1 = {
  valueOf: function() {
    return 1;
  }
};
assert.sameValue(sample.getInt16(obj1, false), -255, "{}.valueOf, false");
assert.sameValue(sample.getInt16(obj1, true), 511, "{}.valueOf, true");

var obj2 = {
  toString: function() {
    return 1;
  }
};
assert.sameValue(sample.getInt16(obj2, false), -255, "{}.toString, false");
assert.sameValue(sample.getInt16(obj2, true), 511, "{}.toString, true");

assert.sameValue(sample.getInt16(true, false), -255, "true, false");
assert.sameValue(sample.getInt16(true, true), 511, "true, true");

assert.sameValue(sample.getInt16(false, false), 32767, "false, false");
assert.sameValue(sample.getInt16(false, true), -129, "false, true");

assert.sameValue(sample.getInt16(null, false), 32767, "null, false");
assert.sameValue(sample.getInt16(null, true), -129, "null, true");
