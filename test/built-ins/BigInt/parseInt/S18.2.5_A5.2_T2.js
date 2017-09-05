// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If the length of S is at least 2 and the first two characters of S
    are either 0x or 0X, then remove the first two characters from S and let R = 16
esid: sec-bigint-parseint-string-radix
description: ": 0X"
---*/

assert.sameValue(BigInt.parseInt("0X0", 0), BigInt.parseInt("0", 16));

assert.sameValue(BigInt.parseInt("0X1"), BigInt.parseInt("1", 16));

assert.sameValue(BigInt.parseInt("0X2"), BigInt.parseInt("2", 16));

assert.sameValue(BigInt.parseInt("0X3"), BigInt.parseInt("3", 16));

assert.sameValue(BigInt.parseInt("0X4"), BigInt.parseInt("4", 16));

assert.sameValue(BigInt.parseInt("0X5"), BigInt.parseInt("5", 16));

assert.sameValue(BigInt.parseInt("0X6"), BigInt.parseInt("6", 16));

assert.sameValue(BigInt.parseInt("0X7"), BigInt.parseInt("7", 16));

assert.sameValue(BigInt.parseInt("0X8"), BigInt.parseInt("8", 16));

assert.sameValue(BigInt.parseInt("0X9"), BigInt.parseInt("9", 16));

assert.sameValue(BigInt.parseInt("0XA"), BigInt.parseInt("A", 16));

assert.sameValue(BigInt.parseInt("0XB"), BigInt.parseInt("B", 16));

assert.sameValue(BigInt.parseInt("0XC"), BigInt.parseInt("C", 16));

assert.sameValue(BigInt.parseInt("0XD"), BigInt.parseInt("D", 16));

assert.sameValue(BigInt.parseInt("0XE"), BigInt.parseInt("E", 16));

assert.sameValue(BigInt.parseInt("0XF"), BigInt.parseInt("F", 16));

assert.sameValue(BigInt.parseInt("0XE"), BigInt.parseInt("E", 16));

assert.sameValue(BigInt.parseInt("0XABCDEF"), BigInt.parseInt("ABCDEF", 16));
