// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If R = 0 or R = undefined, then R = 10
esid: sec-bigint-parseint-string-radix
description: R = undefined
---*/

assert.sameValue(BigInt.parseInt("0"), BigInt.parseInt("0", 10));

assert.sameValue(BigInt.parseInt("1"), BigInt.parseInt("1", 10));

assert.sameValue(BigInt.parseInt("2"), BigInt.parseInt("2", 10));

assert.sameValue(BigInt.parseInt("3"), BigInt.parseInt("3", 10));

assert.sameValue(BigInt.parseInt("4"), BigInt.parseInt("4", 10));

assert.sameValue(BigInt.parseInt("5"), BigInt.parseInt("5", 10));

assert.sameValue(BigInt.parseInt("6"), BigInt.parseInt("6", 10));

assert.sameValue(BigInt.parseInt("7"), BigInt.parseInt("7", 10));

assert.sameValue(BigInt.parseInt("8"), BigInt.parseInt("8", 10));

assert.sameValue(BigInt.parseInt("9"), BigInt.parseInt("9", 10));

assert.sameValue(BigInt.parseInt("10"), BigInt.parseInt("10", 10));

assert.sameValue(BigInt.parseInt("11"), BigInt.parseInt("11", 10));

assert.sameValue(BigInt.parseInt("9999"), BigInt.parseInt("9999", 10));
