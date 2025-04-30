// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-parsefloat-string
description: Checking for number primitive
---*/

//CHECK#1
assert.sameValue(parseFloat(-1.1), parseFloat("-1.1"), '#1: parseFloat(-1.1) === parseFloat("-1.1")');

//CHECK#2
assert.sameValue(parseFloat(Infinity), parseFloat("Infinity"), '#2: parseFloat(Infinity) === parseFloat("Infinity")');

//CHECK#3
assert.sameValue(String(parseFloat(NaN)), "NaN", '#3: String(parseFloat(NaN)) === "NaN"');

//CHECK#4
assert.sameValue(parseFloat(.01e+2), parseFloat(".01e+2"), '#4: parseFloat(.01e+2) === parseFloat(".01e+2")');

//CHECK#5
if (parseFloat(-0) !== 0) {
  throw new Test262Error('#5: parseFloat(-0) === 0. Actual: ' + (parseFloat(-0)));
} else {
  if (1 / parseFloat(-0) !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#5: parseFloat(-0) === +0. Actual: ' + (parseFloat(-0)));
  }
}
