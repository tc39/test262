// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setint16
description: >
  RangeError exception for negative or non-integral index is thrown before
  the value conversion.
info: |
  ...
  3. Return SetViewValue(v, byteOffset, littleEndian, "Int16", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )

  ...
  4. Let getIndex be ? ToIndex(requestIndex).
  ...
---*/

var dataView = new DataView(new ArrayBuffer(8), 0);

var poisoned = {
  valueOf: function() {
    $ERROR("valueOf called");
  }
};

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
  dataView.setInt16(Infinity, poisoned);
}, "setInt16(Infinity, poisoned)");
