// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator ~x returns ~ToInt32(x)
es5id: 11.4.8_A3_T2
description: Type(x) is number primitive or Number object
---*/

//CHECK#1
assert.sameValue(~0.1, -1, '#1: ~0.1 === -1');

//CHECK#2
if (~new Number(-0.1) !== -1) {
  throw new Test262Error('#2: ~new Number(-0.1) === -1. Actual: ' + (~new Number(-0.1)));
}

//CHECK#3
assert.sameValue(~NaN, -1, '#3: ~NaN === -1');

//CHECK#4
if (~new Number(NaN) !== -1) {
  throw new Test262Error('#4: ~new Number(NaN) === -1. Actual: ' + (~new Number(NaN)));
}

//CHECK#5
assert.sameValue(~1, -2, '#5: ~1 === -2');

//CHECK#6
if (~new Number(-2) !== 1) {
  throw new Test262Error('#6: ~new Number(-2) === 1. Actual: ' + (~new Number(-2)));
}

//CHECK#7
assert.sameValue(~Infinity, -1, '#7: ~Infinity === -1');
