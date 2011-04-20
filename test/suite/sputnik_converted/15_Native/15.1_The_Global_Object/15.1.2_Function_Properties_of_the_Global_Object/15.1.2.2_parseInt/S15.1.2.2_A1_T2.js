// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A1_T2;
 * @section: 15.1.2.2, 9.8;
 * @assertion: Operator use ToString;
 * @description: Checking for number primitive;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A1_T2",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.2_parseInt\S15.1.2.2_A1_T2.js",

assertion: "Operator use ToString",

description: "Checking for number primitive",

test: function testcase() {
   //CHECK#1
if (parseInt(-1) !== parseInt("-1")) {
  $ERROR('#1: parseInt(-1) === parseInt("-1"). Actual: ' + (parseInt(-1)));
}

//CHECK#2
if (String(parseInt(Infinity)) !== "NaN") {
  $ERROR('#2: String(parseInt(Infinity)) === "NaN". Actual: ' + (String(parseInt(Infinity))));
}

//CHECK#3
if (String(parseInt(NaN)) !== "NaN") {
  $ERROR('#3: String(parseInt(NaN)) === "NaN". Actual: ' + (String(parseInt(NaN))));
}

//CHECK#4
if (parseInt(-0) !== 0) {
  $ERROR('#4: parseInt(-0) === 0. Actual: ' + (parseInt(-0)));
} else {
  if (1 / parseInt(-0) !== Number.POSITIVE_INFINITY) {
    $ERROR('#4: parseInt(-0) === +0. Actual: ' + (parseInt(-0)));
  }
}    

 }
});

