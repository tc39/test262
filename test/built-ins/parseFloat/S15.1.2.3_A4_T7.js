// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Compute the longest prefix of Result(2), which might be Result(2) itself,
    which satisfies the syntax of a StrDecimalLiteral
esid: sec-parsefloat-string
description: Checking DecimalDigits ExponentPart_opt
---*/

//CHECK#1
assert.sameValue(parseFloat("-11string"), -11, '#1: parseFloat("-11string") === -11');

//CHECK#2
assert.sameValue(parseFloat("01string"), 1, '#2: parseFloat("01string") === 1');

//CHECK#3
assert.sameValue(parseFloat("-11e-1string"), -1.1, '#3: parseFloat("-11e-1string") === -1.1');

//CHECK#4
assert.sameValue(parseFloat("01e1string"), 10, '#4: parseFloat("01e1string") === 10');

//CHECK#5
assert.sameValue(parseFloat("001string"), 1, '#5: parseFloat("001string") === 1');

//CHECK#6
assert.sameValue(parseFloat("1e001string"), 10, '#6: parseFloat("1e001string") === 10');

//CHECK#7
assert.sameValue(parseFloat("010string"), 10, '#7: parseFloat("010string") === 10');
