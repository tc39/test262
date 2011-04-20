// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A1_T3;
 * @section: 15.1.2.3, 9.8;
 * @assertion: Operator use ToString;
 * @description: Checking for undefined and null;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A1_T3",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.3_parseFloat\S15.1.2.3_A1_T3.js",

assertion: "Operator use ToString",

description: "Checking for undefined and null",

test: function testcase() {
   //CHECK#1
if (!(isNaN(parseFloat(undefined)) && isNaN(parseFloat("NaN")))) {
  $ERROR('#1: parseFloat(undefined) === Not-a-Number; parseFloat("NaN") === Not-a-Number. Actual: ' + (parseFloat("NaN")));
}

//CHECK#2
if (!(isNaN(parseFloat(null)) && isNaN(parseFloat("NaN")))) {
  $ERROR('#2: parseFloat(null) === Not-a-Number; parseFloat("NaN") === Not-a-Number. Actual: ' + (parseFloat("NaN")));
}


//CHECK#3
if (String(parseFloat(undefined)) !== "NaN") {
  $ERROR('#3: String(parseFloat(undefined)) === "NaN". Actual: ' + (String(parseFloat(undefined))));
}

//CHECK#4
if (String(parseFloat(null)) !== "NaN") {
  $ERROR('#4: String(parseFloat(null)) === "NaN". Actual: ' + (String(parseFloat(null))));
}

 }
});

