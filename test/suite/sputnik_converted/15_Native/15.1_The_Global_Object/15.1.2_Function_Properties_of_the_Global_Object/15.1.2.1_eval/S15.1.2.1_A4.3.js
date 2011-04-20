// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.1_A4.3;
 * @section: 15.1.2.1;
 * @assertion: The length property of eval has the attribute ReadOnly;
 * @description: Checking if varying the length property fails;
 * @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A4.3",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.1_eval\S15.1.2.1_A4.3.js",

assertion: "The length property of eval has the attribute ReadOnly",

description: "Checking if varying the length property fails",

test: function testcase() {
   //CHECK#1
var x = eval.length;
eval.length = Infinity;
if (eval.length !== x) {
  $ERROR('#1: x = eval.length; eval.length = Infinity; eval.length === x. Actual: ' + (eval.length));
}


 }
});

