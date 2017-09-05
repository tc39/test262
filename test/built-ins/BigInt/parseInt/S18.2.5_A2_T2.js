// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-bigint-parseint-string-radix
description: "StrWhiteSpaceChar :: SP (U+0020)"
---*/

assert.sameValue(BigInt.parseInt("\u00201"), BigInt.parseInt("1"));
assert.sameValue(BigInt.parseInt("\u0020\u0020-1"), BigInt.parseInt("-1"));
assert.sameValue(BigInt.parseInt(" 1"), BigInt.parseInt("1"));
assert.sameValue(BigInt.parseInt("       1"), BigInt.parseInt("1"));
assert.sameValue(BigInt.parseInt("       \u0020       \u0020-1"), BigInt.parseInt("-1"))
assert.throws(SyntaxError, () => BigInt.parseInt("\u0020"));
