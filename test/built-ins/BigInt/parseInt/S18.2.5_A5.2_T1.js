// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If the length of S is at least 2 and the first two characters of S
    are either 0x or 0X, then remove the first two characters from S and let R = 16
esid: sec-bigint-parseint-string-radix
description: ": 0x"
---*/

assert.sameValue(BigInt.parseInt("0x0", 0), BigInt.parseInt("0", 16));

assert.sameValue(BigInt.parseInt("0x1", 0), BigInt.parseInt("1", 16));

assert.sameValue(BigInt.parseInt("0x2", 0), BigInt.parseInt("2", 16));

assert.sameValue(BigInt.parseInt("0x3", 0), BigInt.parseInt("3", 16));

assert.sameValue(BigInt.parseInt("0x4", 0), BigInt.parseInt("4", 16));

assert.sameValue(BigInt.parseInt("0x5", 0), BigInt.parseInt("5", 16));

assert.sameValue(BigInt.parseInt("0x6", 0), BigInt.parseInt("6", 16));

assert.sameValue(BigInt.parseInt("0x7", 0), BigInt.parseInt("7", 16));

assert.sameValue(BigInt.parseInt("0x8", 0), BigInt.parseInt("8", 16));

assert.sameValue(BigInt.parseInt("0x9", 0), BigInt.parseInt("9", 16));

assert.sameValue(BigInt.parseInt("0xA", 0), BigInt.parseInt("A", 16));

assert.sameValue(BigInt.parseInt("0xB", 0), BigInt.parseInt("B", 16));

assert.sameValue(BigInt.parseInt("0xC", 0), BigInt.parseInt("C", 16));

assert.sameValue(BigInt.parseInt("0xD", 0), BigInt.parseInt("D", 16));

assert.sameValue(BigInt.parseInt("0xE", 0), BigInt.parseInt("E", 16));

assert.sameValue(BigInt.parseInt("0xF", 0), BigInt.parseInt("F", 16));

assert.sameValue(BigInt.parseInt("0xE", 0), BigInt.parseInt("E", 16));

assert.sameValue(BigInt.parseInt("0xABCDEF", 0), BigInt.parseInt("ABCDEF", 16));
