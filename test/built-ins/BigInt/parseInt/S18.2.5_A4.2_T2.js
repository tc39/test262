// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If R < 2 or R > 36, then return NaN
esid: sec-bigint-parseint-string-radix
description: R = 37
---*/

assert.throws(SyntaxError, () => BigInt.parseInt("0", 37), "0");
assert.throws(SyntaxError, () => BigInt.parseInt("1", 37), "1");
assert.throws(SyntaxError, () => BigInt.parseInt("2", 37), "2");
assert.throws(SyntaxError, () => BigInt.parseInt("3", 37), "3");
assert.throws(SyntaxError, () => BigInt.parseInt("4", 37), "4");
assert.throws(SyntaxError, () => BigInt.parseInt("5", 37), "5");
assert.throws(SyntaxError, () => BigInt.parseInt("6", 37), "6");
assert.throws(SyntaxError, () => BigInt.parseInt("7", 37), "7");
assert.throws(SyntaxError, () => BigInt.parseInt("8", 37), "8");
assert.throws(SyntaxError, () => BigInt.parseInt("9", 37), "9");
assert.throws(SyntaxError, () => BigInt.parseInt("10", 37), "10");
assert.throws(SyntaxError, () => BigInt.parseInt("11", 37), "11");
