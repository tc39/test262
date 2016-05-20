// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setuint16
description: >
  RangeError exception for negative or non-integral index is thrown before
  the value conversion.
info: >
  ...
  3. Return SetViewValue(v, byteOffset, littleEndian, "Uint16", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )
    ...
    3. Let numberIndex be ToNumber(requestIndex).
    4. Let getIndex be ? ToInteger(numberIndex).
    5. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
    6. Let numberValue be ? ToNumber(value).
    ...
---*/

var dataView = new DataView(new ArrayBuffer(8), 0);

var poisoned = {
  valueOf: function() {
    throw new Test262Error("valueOf called");
  }
};

assert.throws(RangeError, function() {
  dataView.setUint16(NaN, poisoned);
}, "setUint16(NaN, poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16(1.5, poisoned);
}, "setUint16(1.5, poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16(-1.5, poisoned);
}, "setUint16(-1.5, poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16(-1, poisoned);
}, "setUint16(-1, poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16(-Infinity, poisoned);
}, "setUint16(-Infinity, poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16(undefined, poisoned);
}, "setUint16(undefined, poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16('invalid', poisoned);
}, "setUint16('invalid', poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16('NaN', poisoned);
}, "setUint16('NaN', poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16('1.5', poisoned);
}, "setUint16('1.5', poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16('-1.5', poisoned);
}, "setUint16('-1.5', poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16('-1', poisoned);
}, "setUint16('-1', poisoned)");

assert.throws(RangeError, function() {
  dataView.setUint16('-Infinity', poisoned);
}, "setUint16('-Infinity', poisoned)");

var obj = {
  valueOf: function() {
    return 1.41421;
  }
};
assert.throws(RangeError, function() {
  dataView.setUint16(obj, poisoned);
}, "setUint16(obj, poisoned)");
