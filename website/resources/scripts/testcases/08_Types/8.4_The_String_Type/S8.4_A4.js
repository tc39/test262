// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.4_A4;
* @section: 8.4;
* @assertion: Empty string variable has a length property;
* @description: Try read length property of empty string variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.4_A4",

path: "8.4",

description: "Try read length property of empty string variable",

test: function testcase() {
   var __str = "";
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.length !== 0) {
  $ERROR('#1: var __str = ""; __str.length === 0. Actual: ' + (__str));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

