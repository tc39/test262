// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-bigint-parseint-string-radix
description: "StrWhiteSpaceChar :: VT (U+000B)"
---*/

assert.sameValue(BigInt.parseInt("\u000B1"), BigInt.parseInt("1"));
assert.sameValue(BigInt.parseInt("\u000B\u000B-1"), BigInt.parseInt("-1"));
assert.throws(SyntaxError, () => BigInt.parseInt("\u000B"));
