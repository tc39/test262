// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-parsefloat-string
description: "StrWhiteSpaceChar :: TAB (U+0009)"
---*/

//CHECK#1
assert.sameValue(parseFloat("\u00091.1"), parseFloat("1.1"), '#1: parseFloat("\\u00091.1") === parseFloat("1.1")');

//CHECK#2
assert.sameValue(parseFloat("\u0009\u0009-1.1"), parseFloat("-1.1"), '#2: parseFloat("\\u0009\\u0009-1.1") === parseFloat("-1.1")');

//CHECK#3
assert.sameValue(parseFloat("	1.1"), parseFloat("1.1"), '#3: parseFloat("	1.1") === parseFloat("1.1")');

//CHECK#4
assert.sameValue(parseFloat("			1.1"), parseFloat("1.1"), '#4: parseFloat("			1.1") === parseFloat("1.1")');

//CHECK#5
assert.sameValue(parseFloat("			\u0009			\u0009-1.1"), parseFloat("-1.1"), '#5: parseFloat("			\\u0009			\\u0009-1.1") === parseFloat("-1.1")');

//CHECK#6
assert.sameValue(parseFloat("\u0009"), NaN, "'\u0009'");
