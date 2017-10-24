// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getbigint64
description: >
  Return values from Buffer
info: |
  DataView.prototype.getBigInt64 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be undefined.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Int64").

  24.3.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  14. Let bufferIndex be getIndex + viewOffset.
  15. Return GetValueFromBuffer(buffer, bufferIndex, type, isLittleEndian).
  ...

  24.1.1.6 GetValueFromBuffer ( arrayBuffer, byteIndex, type [ , isLittleEndian
  ] )

  ...
  8. If isLittleEndian is false, reverse the order of the elements of rawValue.
  ...
features: [DataView, ArrayBuffer, DataView.prototype.setUint8, BigInt]
---*/

var buffer = new ArrayBuffer(16);
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
sample.setUint8(12, 128);
sample.setUint8(13, 127);
sample.setUint8(14, 255);
sample.setUint8(15, 128);

assert.sameValue(sample.getBigInt64(0, false), 2810815725239828481n, "0, false");
assert.sameValue(sample.getBigInt64(1, false), 145806786723578239n, "1, false");
assert.sameValue(sample.getBigInt64(2, false), 433049253816925952n, "2, false");
assert.sameValue(sample.getBigInt64(3, false), 180144534875734017n, "3, false");
assert.sameValue(sample.getBigInt64(4, false), -9223231292940746494n, "4, false");
assert.sameValue(sample.getBigInt64(5, false), 36030441991504512n, "5, false");
assert.sameValue(sample.getBigInt64(6, false), -9222950923884396417n, "6, false");
assert.sameValue(sample.getBigInt64(7, false), 107804920417124351n, "7, false");
assert.sameValue(sample.getBigInt64(8, false), 9151315553074282368n, "8, false");

assert.sameValue(sample.getBigInt64(0, true), 108086940846653991n, "0, true");
assert.sameValue(sample.getBigInt64(1, true), 9151736657429530114n, "1, true");
assert.sameValue(sample.getBigInt64(2, true), 35748971318084102n, "2, true");
assert.sameValue(sample.getBigInt64(3, true), 72197238457139202n, "3, true");
assert.sameValue(sample.getBigInt64(4, true), 144397208538579072n, "4, true");
assert.sameValue(sample.getBigInt64(5, true), -9222807985258921984n, "5, true");
assert.sameValue(sample.getBigInt64(6, true), 9187345443162358144n, "6, true");
assert.sameValue(sample.getBigInt64(7, true), -36169525900574975n, "7, true");
assert.sameValue(sample.getBigInt64(8, true), -9151455730027396993n, "8, true");
