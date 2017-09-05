// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-bigint-parseint-string-radix
description: Checking for undefined and null
---*/

assert.throws(SyntaxError, () => BigInt.parseInt(undefined));
assert.throws(SyntaxError, () => BigInt.parseInt(null));
