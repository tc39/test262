// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.5_A2;
 * @section: 15.7.3.5;
 * @assertion: Number.NEGATIVE_INFINITY is ReadOnly;
 * @description: Checking if varying Number.NEGATIVE_INFINITY fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.5_A2",

path: "15_Native\15.7_Number_Objects\15.7.3_Properties_of_Number_Constructor\15.7.3.5_Number.NEGATIVE_INFINITY\S15.7.3.5_A2.js",

assertion: "Number.NEGATIVE_INFINITY is ReadOnly",

description: "Checking if varying Number.NEGATIVE_INFINITY fails",

test: function testcase() {
   // CHECK#1
Number.NEGATIVE_INFINITY = 1;
if (isFinite(Number.NEGATIVE_INFINITY)) {
  $ERROR('#1: Number.NEGATIVE_INFINITY = 1; Number.NEGATIVE_INFINITY === -Infinity');
} else { 
  if (Number.NEGATIVE_INFINITY >= 0) {
    $ERROR('#1: Number.NEGATIVE_INFINITY = 1; Number.NEGATIVE_INFINITY === -Infinity');
  }
}

 }
});

