// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-bigint-parseint-string-radix
description: "StrWhiteSpaceChar :: LS (U+2028)"
---*/

assert.sameValue(BigInt.parseInt("\u20281"), BigInt.parseInt("1"));
assert.sameValue(BigInt.parseInt("\u2028\u2028-1"), BigInt.parseInt("-1"));
assert.throws(SyntaxError, () => BigInt.parseInt("\u2028"));
