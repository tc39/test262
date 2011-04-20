// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A11;
* @section: 15.5.4.10;
* @assertion: The length property of the match method is 1;
* @description: Checking String.prototype.match.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.10_A11",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.10_String.prototype.match\S15.5.4.10_A11.js",

assertion: "The length property of the match method is 1",

description: "Checking String.prototype.match.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.match.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.match.hasOwnProperty("length") return true. Actual: '+String.prototype.match.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.match.length !== 1) {
  $ERROR('#2: String.prototype.match.length === 1. Actual: '+String.prototype.match.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

