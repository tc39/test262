// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getuint8
es6id: 24.2.4.10
description: >
  Return values using coerced ToInteger byteOffset values
info: |
  24.2.4.10 DataView.prototype.getUint8 ( byteOffset )

  1. Let v be the this value.
  2. Return ? GetViewValue(v, byteOffset, true, "Uint8").

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

var buffer = new ArrayBuffer(2);
var sample = new DataView(buffer, 0);

sample.setUint8(0, 39);
sample.setUint8(1, 42);

assert.sameValue(sample.getUint8(""), 39, "''");

assert.sameValue(sample.getUint8("0"), 39, "'0'");

assert.sameValue(sample.getUint8("1"), 42, "'1'");

var obj1 = {
  valueOf: function() {
    return 1;
  }
};
assert.sameValue(sample.getUint8(obj1), 42, "{}.valueOf");

var obj2 = {
  toString: function() {
    return 1;
  }
};
assert.sameValue(sample.getUint8(obj2), 42, "{}.toString");

assert.sameValue(sample.getUint8(true), 42, "true");

assert.sameValue(sample.getUint8(false), 39, "false");

assert.sameValue(sample.getUint8(null), 39, "null");
