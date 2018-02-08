// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getbiguint64
description: >
  Return values from Buffer
features: [DataView, ArrayBuffer, DataView.prototype.setUint8, BigInt]
---*/

var buffer = new ArrayBuffer(16);
var sample = new DataView(buffer, 0);

sample.setUint8(0, 0x27);
sample.setUint8(1, 0x02);
sample.setUint8(2, 0x06);
sample.setUint8(3, 0x02);
sample.setUint8(4, 0x80);
sample.setUint8(5, 0x00);
sample.setUint8(6, 0x80);
sample.setUint8(7, 0x01);
sample.setUint8(8, 0x7f);
sample.setUint8(9, 0x00);
sample.setUint8(10, 0x01);
sample.setUint8(11, 0x02);
sample.setUint8(12, 0x80);
sample.setUint8(13, 0x7f);
sample.setUint8(14, 0xff);
sample.setUint8(15, 0x80);

assert.sameValue(sample.getBigUint64(0, false), 0x2702060280008001 n, "0, false");
assert.sameValue(sample.getBigUint64(1, false), 0x20602800080017f n, "1, false");
assert.sameValue(sample.getBigUint64(2, false), 0x602800080017f00 n, "2, false");
assert.sameValue(sample.getBigUint64(3, false), 0x2800080017f0001 n, "3, false");
assert.sameValue(sample.getBigUint64(4, false), 0x800080017f000102 n, "4, false");
assert.sameValue(sample.getBigUint64(5, false), 0x80017f00010280 n, "5, false");
assert.sameValue(sample.getBigUint64(6, false), 0x80017f000102807f n, "6, false");
assert.sameValue(sample.getBigUint64(7, false), 0x17f000102807fff n, "7, false");
assert.sameValue(sample.getBigUint64(8, false), 0x7f000102807fff80 n, "8, false");

assert.sameValue(sample.getBigUint64(0, true), 0x180008002060227 n, "0, true");
assert.sameValue(sample.getBigUint64(1, true), 0x7f01800080020602 n, "1, true");
assert.sameValue(sample.getBigUint64(2, true), 0x7f018000800206 n, "2, true");
assert.sameValue(sample.getBigUint64(3, true), 0x1007f0180008002 n, "3, true");
assert.sameValue(sample.getBigUint64(4, true), 0x201007f01800080 n, "4, true");
assert.sameValue(sample.getBigUint64(5, true), 0x800201007F018000 n, "5, true");
assert.sameValue(sample.getBigUint64(6, true), 0x7f800201007f0180 n, "6, true");
assert.sameValue(sample.getBigUint64(7, true), 0xff7f800201007f01 n, "7, true");
assert.sameValue(sample.getBigUint64(8, true), 0x80ff7f800201007f n, "8, true");
