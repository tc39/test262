// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Compute the longest prefix of Result(2), which might be Result(2) itself,
    which satisfies the syntax of a StrDecimalLiteral
esid: sec-parsefloat-string
description: Some wrong number
---*/

//CHECK#1
assert.sameValue(parseFloat("0x"), 0, '#1: parseFloat("0x") === 0');

//CHECK#2
assert.sameValue(parseFloat("11x"), 11, '#2: parseFloat("11x") === 11');

//CHECK#3
assert.sameValue(parseFloat("11s1"), 11, '#3: parseFloat("11s1") === 11');

//CHECK#4
assert.sameValue(parseFloat("11.s1"), 11, '#4: parseFloat("11.s1") === 11');

//CHECK#5
assert.sameValue(parseFloat(".0s1"), 0, '#5: parseFloat(".0s1") === 0');

//CHECK#6
assert.sameValue(parseFloat("1.s1"), 1, '#6: parseFloat("1.s1") === 1');

//CHECK#7
assert.sameValue(parseFloat("1..1"), 1, '#7: parseFloat("1..1") === 1');

//CHECK#8
assert.sameValue(parseFloat("0.1.1"), 0.1, '#8: parseFloat("0.1.1") === 0.1');

//CHECK#9
if (parseFloat("0. 1") !== 0) {
  throw new Test262Error('#9: parseFloat("0. 1") === 0. Actual: ' + (parseFloat("0. 1")));
}
