// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es7id: 24.2.4.16
description: >
  Throws a RangeError if the index is negative or non-integral number.
info: >
  ...
  3. Return SetViewValue(v, byteOffset, littleEndian, "Int16", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )
    ...
    3. Let numberIndex be ToNumber(requestIndex).
    4. Let getIndex be ? ToInteger(numberIndex).
    5. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
    6. Let numberValue be ? ToNumber(value).
    ...
---*/

var dataView = new DataView(new ArrayBuffer(8));

var poisoned = {
  valueOf: function() {
    $ERROR("valueOf called");
  }
};

assert.throws(RangeError, function() {
  dataView.setInt16(NaN, poisoned);
}, "setInt16(NaN, poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16(1.5, poisoned);
}, "setInt16(1.5, poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16(-1.5, poisoned);
}, "setInt16(-1.5, poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16(-1, poisoned);
}, "setInt16(-1, poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16(-Infinity, poisoned);
}, "setInt16(-Infinity, poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16(undefined, poisoned);
}, "setInt16(undefined, poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16('invalid', poisoned);
}, "setInt16('invalid', poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16('NaN', poisoned);
}, "setInt16('NaN', poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16('1.5', poisoned);
}, "setInt16('1.5', poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16('-1.5', poisoned);
}, "setInt16('-1.5', poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16('-1', poisoned);
}, "setInt16('-1', poisoned)");

assert.throws(RangeError, function() {
  dataView.setInt16('-Infinity', poisoned);
}, "setInt16('-Infinity', poisoned)");

var obj = {
  valueOf: function() {
    return 1.41421;
  }
};
assert.throws(RangeError, function() {
  dataView.setInt16(obj, poisoned);
}, "setInt16(obj, poisoned)");
