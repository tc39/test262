// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-bigint-parseint-string-radix
description: "StrWhiteSpaceChar :: NBSB (U+00A0)"
---*/

assert.sameValue(BigInt.parseInt("\u00A01"), BigInt.parseInt("1"));
assert.sameValue(BigInt.parseInt("\u00A0\u00A0-1"), BigInt.parseInt("-1"));
assert.throws(SyntaxError, () => BigInt.parseInt("\u00A0"));
