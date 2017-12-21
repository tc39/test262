// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint-parseint-string-radix
description: Invalid radix (1)
info: >
  BigInt.parseInt ( string, radix )

  7. If R ≠ 0, then
    a. If R < 2 or R > 36, throw a RangeError exception.
features: [BigInt, arrow-function]
---*/

assert.throws(RangeError, () => BigInt.parseInt("0", 1), "0");
assert.throws(RangeError, () => BigInt.parseInt("1", 1), "1");
assert.throws(RangeError, () => BigInt.parseInt("2", 1), "2");
assert.throws(RangeError, () => BigInt.parseInt("3", 1), "3");
assert.throws(RangeError, () => BigInt.parseInt("4", 1), "4");
assert.throws(RangeError, () => BigInt.parseInt("5", 1), "5");
assert.throws(RangeError, () => BigInt.parseInt("6", 1), "6");
assert.throws(RangeError, () => BigInt.parseInt("7", 1), "7");
assert.throws(RangeError, () => BigInt.parseInt("8", 1), "8");
assert.throws(RangeError, () => BigInt.parseInt("9", 1), "9");
assert.throws(RangeError, () => BigInt.parseInt("10", 1), "10");
assert.throws(RangeError, () => BigInt.parseInt("11", 1), "11");
