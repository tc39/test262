// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A1_T4;
 * @section: 15.1.2.2, 9.8;
 * @assertion: Operator use ToString;
 * @description: Checking for Boolean object;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A1_T4",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.2_parseInt\S15.1.2.2_A1_T4.js",

assertion: "Operator use ToString",

description: "Checking for Boolean object",

test: function testcase() {
   //CHECK#1
if (!(isNaN(parseInt(new Boolean(true))) && isNaN(parseInt("NaN")))) {
  $ERROR('#1: parseInt(new Boolean(true)) === Not-a-Number; parseInt("NaN") === Not-a-Number. Actual: ' + (parseInt("NaN")));
}

//CHECK#2
if (String(parseInt(new Boolean(false))) !== "NaN") {
  $ERROR('#2: String(parseInt(new Boolean(false))) === "NaN". Actual: ' + (String(parseInt(new Boolean(false)))));
}

 }
});

