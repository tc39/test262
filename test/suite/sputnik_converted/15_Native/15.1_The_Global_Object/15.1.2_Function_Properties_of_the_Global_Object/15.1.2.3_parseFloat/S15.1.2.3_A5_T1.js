// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A5_T1;
 * @section: 15.1.2.3, 9.3.1;
 * @assertion: Return the number value for the MV of Result(4);
 * @description: Checking Infinity;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A5_T1",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.3_parseFloat\S15.1.2.3_A5_T1.js",

assertion: "Return the number value for the MV of Result(4)",

description: "Checking Infinity",

test: function testcase() {
   //CHECK#1
if (parseFloat("Infinity") !== Number.POSITIVE_INFINITY) {
  $ERROR('#1: parseFloat("Infinity") === Number.POSITIVE_INFINITY. Actual: ' + (parseFloat("Infinity")));
}

//CHECK#2
if (parseFloat("+Infinity") !== Number.POSITIVE_INFINITY) {
  $ERROR('#2: parseFloat("+Infinity") === Number.POSITIVE_INFINITY. Actual: ' + (parseFloat("+Infinity")));
}

//CHECK#3
if (parseFloat("-Infinity") !== Number.NEGATIVE_INFINITY) {
  $ERROR('#3: parseFloat("-Infinity") === Number.NEGATIVE_INFINITY. Actual: ' + (parseFloat("-Infinity")));
}

 }
});

