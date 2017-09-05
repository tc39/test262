// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-bigint-parseint-string-radix
description: Checking for Number object
---*/

assert.sameValue(BigInt.parseInt(new Number(-1)), BigInt.parseInt("-1"));
assert.throws(SyntaxError, () => BigInt.parseInt(new Number(Infinity)));
assert.throws(SyntaxError, () => BigInt.parseInt(new Number(NaN)));
