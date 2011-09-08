// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator use ToString
 *
 * @section: 15.1.2.2, 9.8;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.2_parseInt/S15.1.2.2_A1_T6.js;
 * @description: Checking for String object;
 */

//CHECK#1
if (parseInt(new String("-1")) !== parseInt("-1")) {
  $ERROR('#1: parseInt(new String("-1")) === parseInt("-1"). Actual: ' + (parseInt(new String("-1"))));
}

//CHECK#2
if (String(parseInt(new String("Infinity"))) !== "NaN") {
  $ERROR('#2: String(parseInt(new String("Infinity"))) === "NaN". Actual: ' + (String(parseInt(new String("Infinity")))));
}

//CHECK#3
if (String(parseInt(new String("NaN"))) !== "NaN") {
  $ERROR('#3: String(parseInt(new String("NaN"))) === "NaN". Actual: ' + (String(parseInt(new String("NaN")))));
}

//CHECK#4
if (String(parseInt(new String("false"))) !== "NaN") {
  $ERROR('#4: String(parseInt(new String("false"))) === "NaN". Actual: ' + (String(parseInt(new String("false")))));
}

