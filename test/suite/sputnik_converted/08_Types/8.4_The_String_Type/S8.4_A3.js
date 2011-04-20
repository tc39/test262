// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.4_A3;
* @section: 8.4;
* @assertion: String type has a length property;
* @description: Try read length property of string variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.4_A3",

path: "08_Types\8.4_The_String_Type\S8.4_A3.js",

assertion: "String type has a length property",

description: "Try read length property of string variable",

test: function testcase() {
   var __str = "ABCDEFGH";
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.length !== 8) {
  $ERROR('#1: var __str = "ABCDEFGH"; __str.length === 8. Actual: ' + (__str.length));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

