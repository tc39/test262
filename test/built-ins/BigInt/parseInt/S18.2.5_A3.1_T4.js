// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToNumber
esid: sec-bigint-parseint-string-radix
description: Checking for Boolean object
---*/

assert.sameValue(BigInt.parseInt("11", new Boolean(false)), BigInt.parseInt("11", false));
assert.throws(SyntaxError, () => BigInt.parseInt("11", new Boolean(true)));
