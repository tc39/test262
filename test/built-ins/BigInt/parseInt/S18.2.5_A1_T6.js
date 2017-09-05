// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-bigint-parseint-string-radix
description: Checking for String object
---*/

assert.sameValue(BigInt.parseInt(new String("-1")), BigInt.parseInt("-1"));
assert.throws(SyntaxError, () => BigInt.parseInt(new String("Infinity")));
assert.throws(SyntaxError, () => BigInt.parseInt(new String("NaN")));
assert.throws(SyntaxError, () => BigInt.parseInt(new String("true")));
assert.throws(SyntaxError, () => BigInt.parseInt(new String("false")));
