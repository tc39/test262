// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-bigint-parseint-string-radix
description: "StrWhiteSpaceChar :: LF (U+000A)"
---*/

assert.sameValue(BigInt.parseInt("\u000A1"), BigInt.parseInt("1"));
assert.sameValue(BigInt.parseInt("\u000A\u000A-1"), BigInt.parseInt("-1"));
assert.throws(SyntaxError, () => BigInt.parseInt("\u000A"));
