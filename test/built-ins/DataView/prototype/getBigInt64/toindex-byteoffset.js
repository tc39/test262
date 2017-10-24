// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getbigint64
description: >
  ToIndex conversions on byteOffset
info: |
  DataView.prototype.getBigInt64 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be undefined.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Int64").

  24.3.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  4. Let getIndex be ? ToIndex(requestIndex).
  ...
includes: [typeCoercion.js]
features: [DataView, ArrayBuffer, DataView.prototype.setUint8, BigInt, Symbol, Symbol.toPrimitive]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

sample.setUint8(0, 39);
sample.setUint8(1, 2);
sample.setUint8(2, 6);
sample.setUint8(3, 2);
sample.setUint8(4, 128);
sample.setUint8(5, 0);
sample.setUint8(6, 128);
sample.setUint8(7, 1);
sample.setUint8(8, 127);
sample.setUint8(9, 0);
sample.setUint8(10, 1);
sample.setUint8(11, 2);

testCoercibleToIndexZero(function (x) {
  assert.sameValue(sample.getBigInt64(x), 2810815725239828481n);
});

testCoercibleToIndexOne(function (x) {
  assert.sameValue(sample.getBigInt64(x), 145806786723578239n);
});

testCoercibleToIndexFromIndex(2, function (x) {
  assert.sameValue(sample.getBigInt64(x), 433049253816925952n);
});

testCoercibleToIndexFromIndex(3, function (x) {
  assert.sameValue(sample.getBigInt64(x), 180144534875734017n);
});
