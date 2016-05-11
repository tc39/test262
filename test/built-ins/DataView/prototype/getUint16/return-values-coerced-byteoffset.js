// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getuint16
es6id: 24.2.4.11
description: >
  Return values using coerced ToInteger byteOffset values
info: |
  24.2.4.11 DataView.prototype.getUint16 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Uint16").

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

assert.sameValue(sample.getUint16("", false), 32767, "'', false");
assert.sameValue(sample.getUint16("", true), 65407, "'', true");

assert.sameValue(sample.getUint16("0", false), 32767, "'0', false");
assert.sameValue(sample.getUint16("0", true), 65407, "'0', true");

assert.sameValue(sample.getUint16("1", false), 65281, "'1', false");
assert.sameValue(sample.getUint16("1", true), 511, "'1', true");

var obj1 = {
  valueOf: function() {
    return 1;
  }
};
assert.sameValue(sample.getUint16(obj1, false), 65281, "{}.valueOf, false");
assert.sameValue(sample.getUint16(obj1, true), 511, "{}.valueOf, true");

var obj2 = {
  toString: function() {
    return 1;
  }
};
assert.sameValue(sample.getUint16(obj2, false), 65281, "{}.toString, false");
assert.sameValue(sample.getUint16(obj2, true), 511, "{}.toString, true");

assert.sameValue(sample.getUint16(true, false), 65281, "true, false");
assert.sameValue(sample.getUint16(true, true), 511, "true, true");

assert.sameValue(sample.getUint16(false, false), 32767, "false, false");
assert.sameValue(sample.getUint16(false, true), 65407, "false, true");

assert.sameValue(sample.getUint16(null, false), 32767, "null, false");
assert.sameValue(sample.getUint16(null, true), 65407, "null, true");
