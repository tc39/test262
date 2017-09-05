// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-bigint-parseint-string-radix
description: "StrWhiteSpaceChar :: CR (U+000D)"
---*/

assert.sameValue(BigInt.parseInt("\u000D1"), BigInt.parseInt("1"));
assert.sameValue(BigInt.parseInt("\u000D\u000D-1"), BigInt.parseInt("-1"));
assert.throws(SyntaxError, () => BigInt.parseInt("\u000D"));
