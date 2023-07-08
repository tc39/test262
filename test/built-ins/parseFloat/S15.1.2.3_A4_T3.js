// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Compute the longest prefix of Result(2), which might be Result(2) itself,
    which satisfies the syntax of a StrDecimalLiteral
esid: sec-parsefloat-string
description: StrDecimalLiteral not contain HexIntegerLiteral
---*/

//CHECK#0
assert.sameValue(parseFloat("0x0"), 0, '#0: parseFloat("0x0") === 0');

//CHECK#1
assert.sameValue(parseFloat("0x1"), 0, '#1: parseFloat("0x1") === 0');

//CHECK#2
assert.sameValue(parseFloat("0x2"), 0, '#2: parseFloat("0x2") === 0');

//CHECK#3
assert.sameValue(parseFloat("0x3"), 0, '#3: parseFloat("0x3") === 0');

//CHECK#4
assert.sameValue(parseFloat("0x4"), 0, '#4: parseFloat("0x4") === 0');

//CHECK#5
assert.sameValue(parseFloat("0x5"), 0, '#5: parseFloat("0x5") === 0');

//CHECK#6
assert.sameValue(parseFloat("0x6"), 0, '#6: parseFloat("0x6") === 0');

//CHECK#7
assert.sameValue(parseFloat("0x7"), 0, '#7: parseFloat("0x7") === 0');

//CHECK#8
assert.sameValue(parseFloat("0x8"), 0, '#8: parseFloat("0x8") === 0');

//CHECK#9
assert.sameValue(parseFloat("0x9"), 0, '#9: parseFloat("0x9") === 0');

//CHECK#A
assert.sameValue(parseFloat("0xA"), 0, '#A: parseFloat("0xA") === 0');

//CHECK#B
assert.sameValue(parseFloat("0xB"), 0, '#B: parseFloat("0xB") === 0');

//CHECK#C
assert.sameValue(parseFloat("0xC"), 0, '#C: parseFloat("0xC") === 0');

//CHECK#D
assert.sameValue(parseFloat("0xD"), 0, '#D: parseFloat("0xD") === 0');

//CHECK#E
assert.sameValue(parseFloat("0xE"), 0, '#E: parseFloat("0xE") === 0');

//CHECK#F
assert.sameValue(parseFloat("0xF"), 0, '#F: parseFloat("0xF") === 0');
