// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A1_T1;
 * @section: 15.1.2.2, 9.8;
 * @assertion: Operator use ToString;
 * @description: Checking for boolean primitive;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A1_T1",

path: "15.1.2.2, 9.8",

description: "Checking for boolean primitive",

test: function testcase() {
   //CHECK#1
if (!(isNaN(parseInt(true)) && isNaN(parseInt("NaN")))) {
  $ERROR('#1: parseInt(true) === Not-a-Number; parseInt("NaN") === Not-a-Number. Actual: ' + (parseInt("NaN")));
}

//CHECK#2
if (String(parseInt(false)) !== "NaN") {
  $ERROR('#2: String(parseInt(false)) === "NaN". Actual: ' + (String(parseInt(false))));
}

 }
});

