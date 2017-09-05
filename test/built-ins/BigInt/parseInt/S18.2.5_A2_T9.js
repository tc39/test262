// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-bigint-parseint-string-radix
description: "StrWhiteSpaceChar :: PS (U+2029)"
---*/

assert.sameValue(BigInt.parseInt("\u20291"), BigInt.parseInt("1"));
assert.sameValue(BigInt.parseInt("\u2029\u2029-1"), BigInt.parseInt("-1"));
assert.throws(SyntaxError, () => BigInt.parseInt("\u2029"));
