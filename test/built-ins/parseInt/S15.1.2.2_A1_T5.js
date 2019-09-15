// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-parseint-string-radix
description: Checking for Number object
---*/

//CHECK#1
if (parseInt(new Number(-1)) !== parseInt("-1")) {
  throw new Test262Error('#1: parseInt(new Number(-1)) === parseInt("-1"). Actual: ' + (parseInt(new Number(-1))));
}

//CHECK#2
if (String(parseInt(new Number(Infinity))) !== "NaN") {
  throw new Test262Error('#2: String(parseInt(new Number(Infinity))) === "NaN". Actual: ' + (String(parseInt(new Number(Infinity)))));
}

//CHECK#3
if (String(parseInt(new Number(NaN))) !== "NaN") {
  throw new Test262Error('#3: String(parseInt(new Number(NaN))) === "NaN". Actual: ' + (String(parseInt(new Number(NaN)))));
}
