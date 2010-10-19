// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A1_T4;
 * @section: 15.1.2.3, 9.8;
 * @assertion: Operator use ToString;
 * @description: Checking for Boolean object;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A1_T4",

path: "15.1.2.3, 9.8",

description: "Checking for Boolean object",

test: function testcase() {
   //CHECK#1
if (!(isNaN(parseFloat(new Boolean(true))) && isNaN(parseFloat("NaN")))) {
  $ERROR('#1: parseFloat(new Boolean(true)) === Not-a-Number; parseFloat("NaN") === Not-a-Number. Actual: ' + (parseFloat("NaN")));
}

//CHECK#2
if (String(parseFloat(new Boolean(false))) !== "NaN") {
  $ERROR('#2: String(parseFloat(new Boolean(false))) === "NaN". Actual: ' + (String(parseFloat(new Boolean(false)))));
}

 }
});

