// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Compute the mathematical integer value
    that is represented by Z in radix-R notation, using the
    letters A-Z and a-z for digits with values 10 through 35.
    Compute the number value for Result(16)
esid: sec-bigint-parseint-string-radix
description: Checking algorithm for R = 2
---*/

assert.sameValue(BigInt.parseInt("1", 2), 1n);
assert.sameValue(BigInt.parseInt("11", 2), 3n);
assert.sameValue(BigInt.parseInt("111", 2), 7n);
assert.sameValue(BigInt.parseInt("1111", 2), 15n);
assert.sameValue(BigInt.parseInt("11111", 2), 31n);
assert.sameValue(BigInt.parseInt("111111", 2), 63n);
assert.sameValue(BigInt.parseInt("1111111", 2), 127n);
assert.sameValue(BigInt.parseInt("11111111", 2), 255n);
assert.sameValue(BigInt.parseInt("111111111", 2), 511n);
assert.sameValue(BigInt.parseInt("1111111111", 2), 1023n);
assert.sameValue(BigInt.parseInt("11111111111", 2), 2047n);
assert.sameValue(BigInt.parseInt("111111111111", 2), 4095n);
assert.sameValue(BigInt.parseInt("1111111111111", 2), 8191n);
assert.sameValue(BigInt.parseInt("11111111111111", 2), 16383n);
assert.sameValue(BigInt.parseInt("111111111111111", 2), 32767n);
assert.sameValue(BigInt.parseInt("1111111111111111", 2), 65535n);
assert.sameValue(BigInt.parseInt("11111111111111111", 2), 131071n);
assert.sameValue(BigInt.parseInt("111111111111111111", 2), 262143n);
assert.sameValue(BigInt.parseInt("1111111111111111111", 2), 524287n);
assert.sameValue(BigInt.parseInt("11111111111111111111", 2), 1048575n);
