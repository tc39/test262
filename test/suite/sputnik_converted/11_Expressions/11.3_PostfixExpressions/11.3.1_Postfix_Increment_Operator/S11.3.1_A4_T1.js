// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.3.1_A4_T1;
* @section: 11.3.1, 11.6.3;
* @assertion: Operator x++ returns ToNumber(x);
* @description: Type(x) is boolean primitive or Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.3.1_A4_T1",

path: "11.3.1, 11.6.3",

description: "Type(x) is boolean primitive or Boolean object",

test: function testcase() {
   //CHECK#1
var x = false;
var y = x++;
if (y !== 0) {
  $ERROR('#1: var x = false; var y = x++; y === 0. Actual: ' + (y));
}

//CHECK#2
var x = new Boolean(true);
var y = x++;
if (y !== 1) {
  $ERROR('#2: var x = new Boolean(true); var y = x++; y === 1. Actual: ' + (y));
}

 }
});

