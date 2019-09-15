// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-parseint-string-radix
description: Checking for String object
---*/

//CHECK#1
if (parseInt(new String("-1")) !== parseInt("-1")) {
  throw new Test262Error('#1: parseInt(new String("-1")) === parseInt("-1"). Actual: ' + (parseInt(new String("-1"))));
}

//CHECK#2
if (String(parseInt(new String("Infinity"))) !== "NaN") {
  throw new Test262Error('#2: String(parseInt(new String("Infinity"))) === "NaN". Actual: ' + (String(parseInt(new String("Infinity")))));
}

//CHECK#3
if (String(parseInt(new String("NaN"))) !== "NaN") {
  throw new Test262Error('#3: String(parseInt(new String("NaN"))) === "NaN". Actual: ' + (String(parseInt(new String("NaN")))));
}

//CHECK#4
if (String(parseInt(new String("false"))) !== "NaN") {
  throw new Test262Error('#4: String(parseInt(new String("false"))) === "NaN". Actual: ' + (String(parseInt(new String("false")))));
}
