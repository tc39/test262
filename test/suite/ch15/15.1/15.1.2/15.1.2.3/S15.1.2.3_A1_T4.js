// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator use ToString
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.3_parseFloat/S15.1.2.3_A1_T4.js
 * @description Checking for Boolean object
 */

//CHECK#1
if (!(isNaN(parseFloat(new Boolean(true))) && isNaN(parseFloat("NaN")))) {
  $ERROR('#1: parseFloat(new Boolean(true)) === Not-a-Number; parseFloat("NaN") === Not-a-Number. Actual: ' + (parseFloat("NaN")));
}

//CHECK#2
if (String(parseFloat(new Boolean(false))) !== "NaN") {
  $ERROR('#2: String(parseFloat(new Boolean(false))) === "NaN". Actual: ' + (String(parseFloat(new Boolean(false)))));
}

