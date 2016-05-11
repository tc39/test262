// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getfloat32
es6id: 24.2.4.5
description: >
  Return values using coerced ToInteger byteOffset values
info: |
  24.2.4.5 DataView.prototype.getFloat32 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Float32").

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

var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);

sample.setUint8(0, 75);
sample.setUint8(1, 75);
sample.setUint8(2, 76);
sample.setUint8(3, 76);
sample.setUint8(4, 75);
sample.setUint8(5, 75);
sample.setUint8(6, 76);
sample.setUint8(7, 76);

assert.sameValue(sample.getFloat32(0, false), 13323340, "0, false");
assert.sameValue(sample.getFloat32(1, false), 13388875, "1, false");
assert.sameValue(sample.getFloat32(0, true), 53554476, "0, true");
assert.sameValue(sample.getFloat32(1, true), 13388875, "1, true");

assert.sameValue(sample.getFloat32("", false), 13323340, "'', false");
assert.sameValue(sample.getFloat32("", true), 53554476, "'', true");

assert.sameValue(sample.getFloat32("0", false), 13323340, "'0', false");
assert.sameValue(sample.getFloat32("0", true), 53554476, "'0', true");

assert.sameValue(sample.getFloat32("1", false), 13388875, "'1', false");
assert.sameValue(sample.getFloat32("1", true), 13388875, "'1', true");

var obj1 = {
  valueOf: function() {
    return 1;
  }
};
assert.sameValue(sample.getFloat32(obj1, false), 13388875, "{}.valueOf, false");
assert.sameValue(sample.getFloat32(obj1, true), 13388875, "{}.valueOf, true");

var obj2 = {
  toString: function() {
    return 1;
  }
};
assert.sameValue(sample.getFloat32(obj2, false), 13388875, "{}.toString, false");
assert.sameValue(sample.getFloat32(obj2, true), 13388875, "{}.toString, true");

assert.sameValue(sample.getFloat32(true, false), 13388875, "true, false");
assert.sameValue(sample.getFloat32(true, true), 13388875, "true, true");

assert.sameValue(sample.getFloat32(false, false), 13323340, "false, false");
assert.sameValue(sample.getFloat32(false, true), 53554476, "false, true");

assert.sameValue(sample.getFloat32(null, false), 13323340, "null, false");
assert.sameValue(sample.getFloat32(null, true), 53554476, "null, true");
