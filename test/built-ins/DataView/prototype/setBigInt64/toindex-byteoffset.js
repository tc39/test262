// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setbigint64
description: >
  ToIndex conversions on byteOffset
features: [DataView, ArrayBuffer, BigInt]
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

var obj1 = {
  valueOf() {
    return 3;
  }
};
var obj2 = {
  toString() {
    return 4;
  }
};

sample.setBigInt64(0, 0 n);
sample.setBigInt64(-0, 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "-0");

sample.setBigInt64(3, 0 n);
sample.setBigInt64(obj1, 42 n);
assert.sameValue(sample.getBigInt64(3), 42 n, "object's valueOf");

sample.setBigInt64(4, 0 n);
sample.setBigInt64(obj2, 42 n);
assert.sameValue(sample.getBigInt64(4), 42 n, "object's toString");

sample.setBigInt64(0, 0 n);
sample.setBigInt64("", 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "the Empty string");

sample.setBigInt64(0, 0 n);
sample.setBigInt64("0", 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "string '0'");

sample.setBigInt64(2, 0 n);
sample.setBigInt64("2", 42 n);
assert.sameValue(sample.getBigInt64(2), 42 n, "string '2'");

sample.setBigInt64(1, 0 n);
sample.setBigInt64(true, 42 n);
assert.sameValue(sample.getBigInt64(1), 42 n, "true");

sample.setBigInt64(0, 0 n);
sample.setBigInt64(false, 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "false");

sample.setBigInt64(0, 0 n);
sample.setBigInt64(NaN, 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "NaN");

sample.setBigInt64(0, 0 n);
sample.setBigInt64(null, 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "null");

sample.setBigInt64(0, 0 n);
sample.setBigInt64(0.1, 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "0.1");

sample.setBigInt64(0, 0 n);
sample.setBigInt64(0.9, 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "0.9");

sample.setBigInt64(1, 0 n);
sample.setBigInt64(1.1, 42 n);
assert.sameValue(sample.getBigInt64(1), 42 n, "1.1");

sample.setBigInt64(1, 0 n);
sample.setBigInt64(1.9, 42 n);
assert.sameValue(sample.getBigInt64(1), 42 n, "1.9");

sample.setBigInt64(0, 0 n);
sample.setBigInt64(-0.1, 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "-0.1");

sample.setBigInt64(0, 0 n);
sample.setBigInt64(-0.99999, 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "-0.99999");

sample.setBigInt64(0, 0 n);
sample.setBigInt64(undefined, 42 n);
assert.sameValue(sample.getBigInt64(0), 42 n, "undefined");
