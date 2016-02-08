// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
es5id: 15.1.2.2_A1_T4
description: Checking for Boolean object
---*/

//CHECK#1
if (!(isNaN(parseInt(new Boolean(true))) && isNaN(parseInt("NaN")))) {
  $ERROR('#1: parseInt(new Boolean(true)) === Not-a-Number; parseInt("NaN") === Not-a-Number. Actual: ' + (parseInt("NaN")));
}

//CHECK#2
if (String(parseInt(new Boolean(false))) !== "NaN") {
  $ERROR('#2: String(parseInt(new Boolean(false))) === "NaN". Actual: ' + (String(parseInt(new Boolean(false)))));
}
