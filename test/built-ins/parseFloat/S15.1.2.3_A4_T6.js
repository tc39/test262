// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Compute the longest prefix of Result(2), which might be Result(2) itself,
    which satisfies the syntax of a StrDecimalLiteral
esid: sec-parsefloat-string
description: Checking . DecimalDigits ExponentPart_opt
---*/

//CHECK#1
assert.sameValue(parseFloat("+.1string"), 0.1, '#1: parseFloat("+.1string") === 0.1');

//CHECK#2
assert.sameValue(parseFloat(".01string"), 0.01, '#2: parseFloat(".01string") === 0.01');

//CHECK#3
assert.sameValue(parseFloat("+.22e-1string"), 0.022, '#3: parseFloat("+.22e-1string") === 0.022');
