// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-bigint-parseint-string-radix
description: Checking for boolean primitive
---*/

assert.throws(SyntaxError, () => BigInt.parseInt(true));
assert.throws(SyntaxError, () => BigInt.parseInt(false));
