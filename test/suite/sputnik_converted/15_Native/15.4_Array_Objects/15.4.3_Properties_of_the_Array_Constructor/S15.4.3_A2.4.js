// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.3_A2.4;
 * @section: 15.4.3;
 * @assertion: The length property of Array is 1;
 * @description: Array.length === 1;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.3_A2.4",

path: "15_Native\15.4_Array_Objects\15.4.3_Properties_of_the_Array_Constructor\S15.4.3_A2.4.js",

assertion: "The length property of Array is 1",

description: "Array.length === 1",

test: function testcase() {
   //CHECK#1
if (Array.length !== 1) {
  $ERROR('#1: Array.length === 1. Actual: ' + (Array.length));
}


 }
});

