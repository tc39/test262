// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-parsefloat-string
description: "StrWhiteSpaceChar :: LS (U+2028)"
---*/

//CHECK#1
assert.sameValue(parseFloat("\u20281.1"), parseFloat("1.1"), '#1: parseFloat("\\u20281.1") === parseFloat("1.1")');

//CHECK#2
assert.sameValue(parseFloat("\u2028\u2028-1.1"), parseFloat("-1.1"), '#2: parseFloat("\\u2028\\u2028-1.1") === parseFloat("-1.1")');

//CHECK#3
assert.sameValue(parseFloat("\u2028"), NaN);
