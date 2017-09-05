// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInt32
esid: sec-bigint-parseint-string-radix
description: ToInt32 use modulo
---*/

assert.sameValue(BigInt.parseInt("11", 4294967298), BigInt.parseInt("11", 2));
assert.sameValue(BigInt.parseInt("11", 4294967296), BigInt.parseInt("11", 10));
assert.throws(SyntaxError, () => BigInt.parseInt("11", -2147483650), "-2147483650");
assert.sameValue(BigInt.parseInt("11", -4294967294), BigInt.parseInt("11", 2));
