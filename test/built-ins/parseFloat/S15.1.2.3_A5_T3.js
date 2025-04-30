// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Return the number value for the MV of Result(4)
esid: sec-parsefloat-string
description: Checking . DecimalDigits ExponentPart_opt
---*/

//CHECK#1
assert.sameValue(parseFloat("+.1"), 0.1, '#1: parseFloat("+.1") === 0.1');

//CHECK#2
assert.sameValue(parseFloat(".01"), 0.01, '#2: parseFloat(".01") === 0.01');

//CHECK#3
assert.sameValue(parseFloat("+.22e-1"), 0.022, '#3: parseFloat("+.22e-1") === 0.022');
