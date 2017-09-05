// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-bigint-parseint-string-radix
description: Checking for number primitive
---*/

assert.sameValue(BigInt.parseInt(-1), BigInt.parseInt("-1"));
assert.throws(SyntaxError, () => BigInt.parseInt(Infinity));
assert.throws(SyntaxError, () => BigInt.parseInt(NaN));
assert.sameValue(BigInt.parseInt(-0), 0n);
