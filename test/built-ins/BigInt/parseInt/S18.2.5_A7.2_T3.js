// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Compute the mathematical integer value
    that is represented by Z in radix-R notation, using the
    letters A-Z and a-z for digits with values 10 through 35.
    Compute the number value for Result(16)
esid: sec-bigint-parseint-string-radix
description: Checking algorithm for R = 16
---*/

assert.sameValue(BigInt.parseInt("0x1", 16), 1n);
assert.sameValue(BigInt.parseInt("0X10", 16), 16n);
assert.sameValue(BigInt.parseInt("0x100", 16), 256n);
assert.sameValue(BigInt.parseInt("0X1000", 16), 4096n);
assert.sameValue(BigInt.parseInt("0x10000", 16), 65536n);
assert.sameValue(BigInt.parseInt("0X100000", 16), 1048576n);
assert.sameValue(BigInt.parseInt("0x1000000", 16), 16777216n);
assert.sameValue(BigInt.parseInt("0x10000000", 16), 268435456n);
assert.sameValue(BigInt.parseInt("0x100000000", 16), 4294967296n);
assert.sameValue(BigInt.parseInt("0x1000000000", 16), 68719476736n);
assert.sameValue(BigInt.parseInt("0x10000000000", 16), 1099511627776n);
assert.sameValue(BigInt.parseInt("0x100000000000", 16), 17592186044416n);
assert.sameValue(BigInt.parseInt("0x1000000000000", 16), 281474976710656n);
assert.sameValue(BigInt.parseInt("0x10000000000000", 16), 4503599627370496n);
assert.sameValue(BigInt.parseInt("0x100000000000000", 16), 72057594037927936n);
assert.sameValue(BigInt.parseInt("0x1000000000000000", 16), 1152921504606846976n);
assert.sameValue(BigInt.parseInt("0x10000000000000000", 16), 18446744073709551616n);
assert.sameValue(BigInt.parseInt("0x100000000000000000", 16), 295147905179352825856n);
assert.sameValue(BigInt.parseInt("0x1000000000000000000", 16), 4722366482869645213696n);
assert.sameValue(BigInt.parseInt("0x10000000000000000000", 16), 75557863725914323419136n);
