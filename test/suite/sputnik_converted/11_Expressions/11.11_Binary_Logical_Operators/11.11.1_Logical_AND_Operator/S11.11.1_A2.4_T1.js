// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.11.1_A2.4_T1;
 * @section: 11.11.1;
 * @assertion: First expression is evaluated first, and then second expression;
 * @description: Checking with "=";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.1_A2.4_T1",

path: "11.11.1",

description: "Checking with \"=\"",

test: function testcase() {
   //CHECK#1
var x = false; 
if (((x = true) && x) !== true) {
  $ERROR('#1: var x = false; ((x = true) && x) === true');
}

//CHECK#2
var x = false; 
if ((x && (x = true)) !== false) {
  $ERROR('#2: var x = false; (x && (x = true)) === false');
}


 }
});

