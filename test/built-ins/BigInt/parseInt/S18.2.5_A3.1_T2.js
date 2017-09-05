// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToNumber
esid: sec-bigint-parseint-string-radix
description: Checking for string primitive
---*/

assert.sameValue(BigInt.parseInt("11", "2"), BigInt.parseInt("11", 2));
assert.sameValue(BigInt.parseInt("11", "0"), BigInt.parseInt("11", 10));
assert.sameValue(BigInt.parseInt("11", ""), BigInt.parseInt("11", 10));
