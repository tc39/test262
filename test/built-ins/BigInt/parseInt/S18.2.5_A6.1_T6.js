// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If S contains any character that is not a radix-R digit,
    then let Z be the substring of S consisting of all characters before
    the first such character; otherwise, let Z be S
esid: sec-bigint-parseint-string-radix
description: Complex test. Radix-R notation in [0..9]
---*/

assert.sameValue(BigInt.parseInt("0123456789", 2), 1n);
assert.sameValue(BigInt.parseInt("01234567890", 3), 5n);
assert.sameValue(BigInt.parseInt("01234567890", 4), 27n);
assert.sameValue(BigInt.parseInt("01234567890", 5), 194n);
assert.sameValue(BigInt.parseInt("01234567890", 6), 1865n);
assert.sameValue(BigInt.parseInt("01234567890", 7), 22875n);
assert.sameValue(BigInt.parseInt("01234567890", 8), 342391n);
assert.sameValue(BigInt.parseInt("01234567890", 9), 6053444n);
assert.sameValue(BigInt.parseInt("01234567890", 10), 1234567890n);
