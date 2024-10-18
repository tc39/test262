// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Compute the longest prefix of Result(2), which might be Result(2) itself,
    which satisfies the syntax of a StrDecimalLiteral
esid: sec-parsefloat-string
description: With ExponentIndicator
---*/

//CHECK#1
assert.sameValue(parseFloat("1ex"), 1, '#1: parseFloat("1ex") === 1');

//CHECK#2
assert.sameValue(parseFloat("1e-x"), 1, '#2: parseFloat("1e-x") === 1');

//CHECK#3
assert.sameValue(parseFloat("1e1x"), 10, '#3: parseFloat("1e1x") === 10');

//CHECK#4
assert.sameValue(parseFloat("1e-1x"), 0.1, '#4: parseFloat("1e-1x") === 0.1');

//CHECK#5
assert.sameValue(parseFloat("0.1e-1x"), 0.01, '#5: parseFloat("0.1e-1x") === 0.01');
