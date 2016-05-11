// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getfloat64
es6id: 24.2.4.6
description: >
  Return values using coerced ToInteger byteOffset values
info: |
  24.2.4.6 DataView.prototype.getFloat64 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Float64").

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

var buffer = new ArrayBuffer(9);
var sample = new DataView(buffer, 0);

sample.setUint8(0, 67);
sample.setUint8(1, 67);
sample.setUint8(2, 68);
sample.setUint8(3, 68);
sample.setUint8(4, 67);
sample.setUint8(5, 67);
sample.setUint8(6, 68);
sample.setUint8(7, 68);
sample.setUint8(8, 67);

assert.sameValue(sample.getFloat64("", false), 10846169068898440, "'', false");
assert.sameValue(sample.getFloat64("", true), 747563348316297500000, "'', true");

assert.sameValue(sample.getFloat64("0", false), 10846169068898440, "'0', false");
assert.sameValue(sample.getFloat64("0", true), 747563348316297500000, "'0', true");

assert.sameValue(sample.getFloat64("1", false), 11409110432516230, "'1', false");
assert.sameValue(sample.getFloat64("1", true), 11409110432516230, "'1', true");

var obj1 = {
  valueOf: function() {
    return 1;
  }
};
assert.sameValue(sample.getFloat64(obj1, false), 11409110432516230, "{}.valueOf, false");
assert.sameValue(sample.getFloat64(obj1, true), 11409110432516230, "{}.valueOf, true");

var obj2 = {
  toString: function() {
    return 1;
  }
};
assert.sameValue(sample.getFloat64(obj2, false), 11409110432516230, "{}.toString, false");
assert.sameValue(sample.getFloat64(obj2, true), 11409110432516230, "{}.toString, true");

assert.sameValue(sample.getFloat64(true, false), 11409110432516230, "true, false");
assert.sameValue(sample.getFloat64(true, true), 11409110432516230, "true, true");

assert.sameValue(sample.getFloat64(false, false), 10846169068898440, "false, false");
assert.sameValue(sample.getFloat64(false, true), 747563348316297500000, "false, true");

assert.sameValue(sample.getFloat64(null, false), 10846169068898440, "null, false");
assert.sameValue(sample.getFloat64(null, true), 747563348316297500000, "null, true");
