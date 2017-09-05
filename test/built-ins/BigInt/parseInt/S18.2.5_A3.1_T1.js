// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToNumber
esid: sec-bigint-parseint-string-radix
description: Checking for boolean primitive
---*/

assert.sameValue(BigInt.parseInt("11", false), BigInt.parseInt("11", 10));
assert.throws(SyntaxError, () => BigInt.parseInt("11", true));
