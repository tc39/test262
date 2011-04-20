// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.4_A2.4;
 * @section: 15.1.2.4;
 * @assertion: The length property of isNaN is 1;
 * @description: isNaN.length === 1;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.4_A2.4",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.4_isNaN\S15.1.2.4_A2.4.js",

assertion: "The length property of isNaN is 1",

description: "isNaN.length === 1",

test: function testcase() {
   //CHECK#1
if (isNaN.length !== 1) {
  $ERROR('#1: isNaN.length === 1. Actual: ' + (isNaN.length));
} 


 }
});

