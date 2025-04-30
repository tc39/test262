// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Return the number value for the MV of Result(4)
esid: sec-parsefloat-string
description: Checking DecimalDigits . DecimalDigits_opt ExponentPart_opt
---*/

//CHECK#1
assert.sameValue(parseFloat("-11."), -11, '#1: parseFloat("-11.") === -11');

//CHECK#2
assert.sameValue(parseFloat("01."), 1, '#2: parseFloat("01.") === 1');

//CHECK#3
assert.sameValue(parseFloat("+11.1"), 11.1, '#3: parseFloat("+11.1") === 11.1');

//CHECK#4
assert.sameValue(parseFloat("01.1"), 1.1, '#4: parseFloat("01.1") === 1.1');

//CHECK#5
assert.sameValue(parseFloat("-11.e-1"), -1.1, '#5: parseFloat("-11.e-1") === -1.1');

//CHECK#6
assert.sameValue(parseFloat("01.e1"), 10, '#6: parseFloat("01.e1") === 10');

//CHECK#7
assert.sameValue(parseFloat("+11.22e-1"), 1.122, '#7: parseFloat("+11.22e-1") === 1.122');

//CHECK#8
assert.sameValue(parseFloat("01.01e1"), 10.1, '#8: parseFloat("01.01e1") === 10.1');

//CHECK#9
assert.sameValue(parseFloat("001."), 1, '#9: parseFloat("001.") === 1');

//CHECK#10
assert.sameValue(parseFloat("010."), 10, '#10: parseFloat("010.") === 10');
