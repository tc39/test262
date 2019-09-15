// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-parseint-string-radix
description: Checking for number primitive
---*/

//CHECK#1
if (parseInt(-1) !== parseInt("-1")) {
  throw new Test262Error('#1: parseInt(-1) === parseInt("-1"). Actual: ' + (parseInt(-1)));
}

//CHECK#2
if (String(parseInt(Infinity)) !== "NaN") {
  throw new Test262Error('#2: String(parseInt(Infinity)) === "NaN". Actual: ' + (String(parseInt(Infinity))));
}

//CHECK#3
if (String(parseInt(NaN)) !== "NaN") {
  throw new Test262Error('#3: String(parseInt(NaN)) === "NaN". Actual: ' + (String(parseInt(NaN))));
}

//CHECK#4
if (parseInt(-0) !== 0) {
  throw new Test262Error('#4: parseInt(-0) === 0. Actual: ' + (parseInt(-0)));
} else {
  if (1 / parseInt(-0) !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#4: parseInt(-0) === +0. Actual: ' + (parseInt(-0)));
  }
}
