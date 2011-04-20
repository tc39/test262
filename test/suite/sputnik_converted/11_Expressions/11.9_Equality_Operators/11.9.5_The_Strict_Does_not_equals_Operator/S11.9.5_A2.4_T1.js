// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.5_A2.4_T1;
 * @section: 11.9.5;
 * @assertion: First expression is evaluated first, and then second expression;
 * @description: Checking with "=";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.5_A2.4_T1",

path: "11_Expressions\11.9_Equality_Operators\11.9.5_The_Strict_Does_not_equals_Operator\S11.9.5_A2.4_T1.js",

assertion: "First expression is evaluated first, and then second expression",

description: "Checking with \"=\"",

test: function testcase() {
   //CHECK#1
var x = 0; 
if ((x = 1) !== x) {
  $ERROR('#1: var x = 0; (x = 1) === x');
}

//CHECK#2
var x = 0; 
if (!(x !== (x = 1))) {
  $ERROR('#2: var x = 0; x !== (x = 1)');
}


 }
});

