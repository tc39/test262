// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getuint32
es6id: 24.2.4.12
description: >
  Return values using coerced ToInteger byteOffset values
info: |
  24.2.4.12 DataView.prototype.getUint32 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Uint32").

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

var buffer = new ArrayBuffer(5);
var sample = new DataView(buffer, 0);

sample.setUint8(0, 127);
sample.setUint8(1, 255);
sample.setUint8(2, 255);
sample.setUint8(3, 255);
sample.setUint8(4, 128);

assert.sameValue(sample.getUint32("", false), 2147483647, "'', false");
assert.sameValue(sample.getUint32("", true), 4294967167, "'', true");

assert.sameValue(sample.getUint32("0", false), 2147483647, "'0', false");
assert.sameValue(sample.getUint32("0", true), 4294967167, "'0', true");

assert.sameValue(sample.getUint32("1", false), 4294967168, "'1', false");
assert.sameValue(sample.getUint32("1", true), 2164260863, "'1', true");

var obj1 = {
  valueOf: function() {
    return 1;
  }
};
assert.sameValue(sample.getUint32(obj1, false), 4294967168, "{}.valueOf, false");
assert.sameValue(sample.getUint32(obj1, true), 2164260863, "{}.valueOf, true");

var obj2 = {
  toString: function() {
    return 1;
  }
};
assert.sameValue(sample.getUint32(obj2, false), 4294967168, "{}.toString, false");
assert.sameValue(sample.getUint32(obj2, true), 2164260863, "{}.toString, true");

assert.sameValue(sample.getUint32(true, false), 4294967168, "true, false");
assert.sameValue(sample.getUint32(true, true), 2164260863, "true, true");

assert.sameValue(sample.getUint32(false, false), 2147483647, "false, false");
assert.sameValue(sample.getUint32(false, true), 4294967167, "false, true");

assert.sameValue(sample.getUint32(null, false), 2147483647, "null, false");
assert.sameValue(sample.getUint32(null, true), 4294967167, "null, true");
