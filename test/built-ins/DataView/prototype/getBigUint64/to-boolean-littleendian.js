// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Boolean littleEndian argument coerced in ToBoolean
esid: sec-dataview.prototype.getbiguint64
features: [ArrayBuffer, BigInt, DataView, DataView.prototype.setUint8, Symbol]
---*/

var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
sample.setUint8(7, 0xff);
assert.sameValue(sample.getBigUint64(0), 0xff n, "no argument");

assert.sameValue(sample.getBigUint64(0, false), 0xff n);
assert.sameValue(sample.getBigUint64(0, true), 0xff00000000000000 n);
assert.sameValue(sample.getBigUint64(0, 0), 0xff n, "ToBoolean: 0 => false");
assert.sameValue(sample.getBigUint64(0, -0), 0xff n, "ToBoolean: -0 => false");
assert.sameValue(sample.getBigUint64(0, 1), 0xff00000000000000 n, "ToBoolean: Number != 0 => true");
assert.sameValue(sample.getBigUint64(0, -1), 0xff00000000000000 n, "ToBoolean: Number != 0 => true");
assert.sameValue(sample.getBigUint64(0, 0.1), 0xff00000000000000 n, "ToBoolean: Number != 0 => true");
assert.sameValue(sample.getBigUint64(0, Infinity), 0xff00000000000000 n,
  "ToBoolean: Number != 0 => true");
assert.sameValue(sample.getBigUint64(0, NaN), 0xff n, "ToBoolean: NaN => false");
assert.sameValue(sample.getBigUint64(0, undefined), 0xff n, "ToBoolean: undefined => false");
assert.sameValue(sample.getBigUint64(0, null), 0xff n, "ToBoolean: null => false");
assert.sameValue(sample.getBigUint64(0, ""), 0xff n, "ToBoolean: String .length == 0 => false");
assert.sameValue(sample.getBigUint64(0, "string"), 0xff00000000000000 n,
  "ToBoolean: String .length > 0 => true");
assert.sameValue(sample.getBigUint64(0, "false"), 0xff00000000000000 n,
  "ToBoolean: String .length > 0 => true");
assert.sameValue(sample.getBigUint64(0, " "), 0xff00000000000000 n,
  "ToBoolean: String .length > 0 => true");
assert.sameValue(sample.getBigUint64(0, Symbol("1")), 0xff00000000000000 n,
  "ToBoolean: Symbol => true");
assert.sameValue(sample.getBigUint64(0, 0 n), 0xff n, "ToBoolean: 0n => false");
assert.sameValue(sample.getBigUint64(0, 1 n), 0xff00000000000000 n, "ToBoolean: BigInt != 0n => true");
assert.sameValue(sample.getBigUint64(0, []), 0xff00000000000000 n, "ToBoolean: any object => true");
assert.sameValue(sample.getBigUint64(0, {}), 0xff00000000000000 n, "ToBoolean: any object => true");
assert.sameValue(sample.getBigUint64(0, Object(false)), 0xff00000000000000 n,
  "ToBoolean: any object => true; no ToPrimitive");
