// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInt32
esid: sec-bigint-parseint-string-radix
description: ToInt32 use floor
---*/

assert.sameValue(BigInt.parseInt("11", 2.1), BigInt.parseInt("11", 2));
assert.sameValue(BigInt.parseInt("11", 2.5), BigInt.parseInt("11", 2));
assert.sameValue(BigInt.parseInt("11", 2.9), BigInt.parseInt("11", 2));
assert.sameValue(BigInt.parseInt("11", 2.000000000001), BigInt.parseInt("11", 2));
assert.sameValue(BigInt.parseInt("11", 2.999999999999), BigInt.parseInt("11", 2));
