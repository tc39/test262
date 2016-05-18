// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setuint8
es6id: 24.2.4.18
description: >
  Throws a RangeError if numberIndex ≠ getIndex
info: |
  24.2.4.18 DataView.prototype.setUint8 ( byteOffset, value )

  1. Let v be the this value.
  2. Return ? SetViewValue(v, byteOffset, true, "Uint8", value).

  24.2.1.2 SetViewValue ( view, requestIndex, isLittleEndian, type, value )

  ...
  4. Let numberIndex be ? ToNumber(requestIndex).
  5. Let getIndex be ToInteger(numberIndex).
  6. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
  ...
features: [Uint8Array]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);
var typedArray = new Uint8Array(buffer, 0);

assert.throws(RangeError, function() {
  sample.setUint8();
}, "no args");
assert.sameValue(typedArray[0], 0, "no args - no value was set");

assert.throws(RangeError, function() {
  sample.setUint8(undefined, 39);
}, "undefined");
assert.sameValue(typedArray[0], 0, "undefined - no value was set");

assert.throws(RangeError, function() {
  sample.setUint8(1.1, 39);
}, "floating number");
assert.sameValue(typedArray[0], 0, "floating number - no value was set");

assert.throws(RangeError, function() {
  sample.setUint8(0.1, 39);
}, "0.1");
assert.sameValue(typedArray[0], 0, "0.1 - no value was set");

assert.throws(RangeError, function() {
  sample.setUint8(NaN, 39);
}, "NaN");
assert.sameValue(typedArray[0], 0, "NaN - no value was set");

assert.throws(RangeError, function() {
  sample.setUint8(-0.1, 39);
}, "-0.1");
assert.sameValue(typedArray[0], 0, "-0.1 - no value was set");

assert.throws(RangeError, function() {
  sample.setUint8(-1.1, 39);
}, "-1.1");
assert.sameValue(typedArray[0], 0, "-1.1 - no value was set");
