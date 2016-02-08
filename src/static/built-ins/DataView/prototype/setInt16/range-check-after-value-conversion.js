// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es7id: 24.2.4.16
description: >
  Index bounds checks are performed after value conversion.
info: >
  ...
  3. Return SetViewValue(v, byteOffset, littleEndian, "Int16", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )
    ...
    3. Let numberIndex be ToNumber(requestIndex).
    4. Let getIndex be ? ToInteger(numberIndex).
    ...
    6. Let numberValue be ? ToNumber(value).
    ...
    11. Let viewSize be the value of view's [[ByteLength]] internal slot.
    12. Let elementSize be the Number value of the Element Size value specified in Table 49 for Element Type type.
    13. If getIndex + elementSize > viewSize, throw a RangeError exception.
    ...
---*/

var dataView = new DataView(new ArrayBuffer(8));

function DummyError() { }

var poisoned = {
  valueOf: function() {
    throw new DummyError();
  }
};

assert.throws(DummyError, function() {
  dataView.setInt16(Infinity, poisoned);
}, "setInt16(Infinity, poisoned)");

assert.throws(DummyError, function() {
  dataView.setInt16(100, poisoned);
}, "setInt16(100, poisoned)");

assert.throws(DummyError, function() {
  dataView.setInt16('Infinity', poisoned);
}, "setInt16('Infinity', poisoned)");

assert.throws(DummyError, function() {
  dataView.setInt16('100', poisoned);
}, "setInt16('100', poisoned)");
