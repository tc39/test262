// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Compute the longest prefix of Result(2), which might be Result(2) itself,
    which satisfies the syntax of a StrDecimalLiteral
esid: sec-parsefloat-string
description: Checking DecimalDigits . DecimalDigits_opt ExponentPart_opt
---*/

//CHECK#1
assert.sameValue(parseFloat("-11.string"), -11, '#1: parseFloat("-11.string") === -11');

//CHECK#2
assert.sameValue(parseFloat("01.string"), 1, '#2: parseFloat("01.string") === 1');

//CHECK#3
assert.sameValue(parseFloat("+11.1string"), 11.1, '#3: parseFloat("+11.1string") === 11.1');

//CHECK#4
assert.sameValue(parseFloat("01.1string"), 1.1, '#4: parseFloat("01.1string") === 1.1');

//CHECK#5
assert.sameValue(parseFloat("-11.e-1string"), -1.1, '#5: parseFloat("-11.e-1string") === -1.1');

//CHECK#6
assert.sameValue(parseFloat("01.e1string"), 10, '#6: parseFloat("01.e1string") === 10');

//CHECK#7
assert.sameValue(parseFloat("+11.22e-1string"), 1.122, '#7: parseFloat("+11.22e-1string") === 1.122');

//CHECK#8
assert.sameValue(parseFloat("01.01e1string"), 10.1, '#8: parseFloat("01.01e1string") === 10.1');

//CHECK#9
assert.sameValue(parseFloat("001.string"), 1, '#9: parseFloat("001.string") === 1');

//CHECK#10
assert.sameValue(parseFloat("010.string"), 10, '#10: parseFloat("010.string") === 10');
