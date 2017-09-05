// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If R < 2 or R > 36, then return NaN
esid: sec-bigint-parseint-string-radix
description: R = 1
---*/

assert.throws(SyntaxError, () => BigInt.parseInt("0", 1), "0");
assert.throws(SyntaxError, () => BigInt.parseInt("1", 1), "1");
assert.throws(SyntaxError, () => BigInt.parseInt("2", 1), "2");
assert.throws(SyntaxError, () => BigInt.parseInt("3", 1), "3");
assert.throws(SyntaxError, () => BigInt.parseInt("4", 1), "4");
assert.throws(SyntaxError, () => BigInt.parseInt("5", 1), "5");
assert.throws(SyntaxError, () => BigInt.parseInt("6", 1), "6");
assert.throws(SyntaxError, () => BigInt.parseInt("7", 1), "7");
assert.throws(SyntaxError, () => BigInt.parseInt("8", 1), "8");
assert.throws(SyntaxError, () => BigInt.parseInt("9", 1), "9");
assert.throws(SyntaxError, () => BigInt.parseInt("10", 1), "10");
assert.throws(SyntaxError, () => BigInt.parseInt("11", 1), "11");
