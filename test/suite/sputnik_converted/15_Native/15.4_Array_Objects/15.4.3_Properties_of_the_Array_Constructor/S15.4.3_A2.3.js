// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.3_A2.3;
 * @section: 15.4.3; 
 * @assertion: The length property of Array has the attribute ReadOnly;
 * @description: Checking if varying the length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.3_A2.3",

path: "15_Native\15.4_Array_Objects\15.4.3_Properties_of_the_Array_Constructor\S15.4.3_A2.3.js",

assertion: "The length property of Array has the attribute ReadOnly",

description: "Checking if varying the length property fails",

test: function testcase() {
   //CHECK#1
x = Array.length;
Array.length = Infinity;
if (Array.length !== x) {
  $ERROR('#1: x = Array.length; Array.length = Infinity; Array.length === x. Actual: ' + (Array.length));
}


 }
});

