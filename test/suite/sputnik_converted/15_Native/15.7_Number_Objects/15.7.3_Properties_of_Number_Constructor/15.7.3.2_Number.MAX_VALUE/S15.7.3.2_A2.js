// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.2_A2;
 * @section: 15.7.3.2;
 * @assertion: Number.MAX_VALUE is ReadOnly;
 * @description: Checking if varying Number.MAX_VALUE fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.2_A2",

path: "15_Native\15.7_Number_Objects\15.7.3_Properties_of_Number_Constructor\15.7.3.2_Number.MAX_VALUE\S15.7.3.2_A2.js",

assertion: "Number.MAX_VALUE is ReadOnly",

description: "Checking if varying Number.MAX_VALUE fails",

test: function testcase() {
   // CHECK#1
var x = Number.MAX_VALUE;
Number.MAX_VALUE = 1;
if (Number.MAX_VALUE !== x) {
  $ERROR('#1: x = Number.MAX_VALUE; Number.MAX_VALUE = 1; Number.MAX_VALUE === x');
}

 }
});

