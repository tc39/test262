// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A3.1_T5;
 * @section: 15.1.2.2, 9.3;
 * @assertion: Operator use ToNumber;
 * @description: Checking for Number object;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A3.1_T5",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.2_parseInt\S15.1.2.2_A3.1_T5.js",

assertion: "Operator use ToNumber",

description: "Checking for Number object",

test: function testcase() {
   //CHECK#1
if (parseInt("11", new Number(2)) !== parseInt("11", 2)) {
  $ERROR('#1: parseInt("11", new Number(2)) === parseInt("11", 2). Actual: ' + (parseInt("11", new Number(2))));
}

//CHECK#2
if (parseInt("11", new Number(Infinity)) !== parseInt("11", Infinity)) {
  $ERROR('#2: parseInt("11", new Number(Infinity)) === parseInt("11", Infinity). Actual: ' + (parseInt("11", new Number(Infinity))));
}

 }
});

