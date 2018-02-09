// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setbigint64
description: >
  Boolean littleEndian argument coerced in ToBoolean
features: [DataView, ArrayBuffer, Symbol, BigInt]
---*/

var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);

// False
sample.setBigInt64(0, 1 n);
assert.sameValue(sample.getBigInt64(0), 1 n, "no arg");
sample.setBigInt64(0, 2 n, undefined);
assert.sameValue(sample.getBigInt64(0), 2 n, "undefined");
sample.setBigInt64(0, 3 n, null);
assert.sameValue(sample.getBigInt64(0), 3 n, "null");
sample.setBigInt64(0, 4 n, 0);
assert.sameValue(sample.getBigInt64(0), 4 n, "0");
sample.setBigInt64(0, 5 n, "");
assert.sameValue(sample.getBigInt64(0), 5 n, "the empty string");

// True
sample.setBigInt64(0, 6 n, {});
assert.sameValue(sample.getBigInt64(0), 0x600000000000000 n, "{}");
sample.setBigInt64(0, 7 n, Symbol("1"));
assert.sameValue(sample.getBigInt64(0), 0x700000000000000 n, "symbol");
sample.setBigInt64(0, 8 n, 1);
assert.sameValue(sample.getBigInt64(0), 0x800000000000000 n, "1");
sample.setBigInt64(0, 9 n, "string");
assert.sameValue(sample.getBigInt64(0), 0x900000000000000 n, "string");
