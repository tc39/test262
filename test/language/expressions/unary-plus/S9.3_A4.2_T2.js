// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Result of number conversion from number value equals to the input
    argument (no conversion)
es5id: 9.3_A4.2_T2
description: >
    Number.NaN, +0, -0, Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,  Number.MAX_VALUE and Number.MIN_VALUE
    convert to Number by implicit transformation
---*/

// CHECK#1
assert.sameValue(isNaN(+(Number.NaN)), true, '#1: +(NaN) === Not-a-Number');

// CHECK#2
if (+(+0) !== +0) {
  throw new Test262Error('#2.1: +(+0) === 0. Actual: ' + (+(+0)));
} else {
  if (1/+(+0) !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#2.2: +(+0) === +0. Actual: -0');
  }
}

// CHECK#3
if (+(-0) !== -0) {
  throw new Test262Error('#3.1: +(-0) === 0. Actual: ' + (+(-0)));
} else {
  if (1/+(-0) !== Number.NEGATIVE_INFINITY) {
    throw new Test262Error('#3.2: +(-0) === -0. Actual: +0');
  }
}

// CHECK#4
assert.sameValue(+(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY, '#4: +(+Infinity) === +Infinity');

// CHECK#5
assert.sameValue(+(Number.NEGATIVE_INFINITY), Number.NEGATIVE_INFINITY, '#5: +(-Infinity) === -Infinity');

// CHECK#6
assert.sameValue(+(Number.MAX_VALUE), Number.MAX_VALUE, '#6: +(Number.MAX_VALUE) === Number.MAX_VALUE');

// CHECK#7
assert.sameValue(+(Number.MIN_VALUE), Number.MIN_VALUE, '#7: +(Number.MIN_VALUE) === Number.MIN_VALUE');
