// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A3.2_T6;
 * @section: 11.13.2;
 * @assertion: Operator x @= y returns x @ y;
 * @description: Checking Expression and Variable statements for x <<= y;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A3.2_T6",

path: "11_Expressions\11.13_Assignment_Operators\11.13.2_Compound_Assignment\S11.13.2_A3.2_T6.js",

assertion: "Operator x @= y returns x @ y",

description: "Checking Expression and Variable statements for x <<= y",

test: function testcase() {
   //CHECK#1
var x = 1;
var x1 = (x <<= 1);
if (x1 !== 2) {
  $ERROR('#1: var x = 1; var x1 = (x <<= 1); x1 === 2. Actual: ' + (x1));
}

//CHECK#2
y = 1;
y1 = (y <<= 1);
if (y1 !== 2) {
  $ERROR('#2: y = 1; y1 = (y <<= 1); y1 === 2. Actual: ' + (y1));
}

 }
});

