// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A11;
* @section: 15.5.4.13;
* @assertion: The length property of the slice method is 2;
* @description: Checking String.prototype.slice.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A11",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.13_String.prototype.slice\S15.5.4.13_A11.js",

assertion: "The length property of the slice method is 2",

description: "Checking String.prototype.slice.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.slice.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.slice.hasOwnProperty("length") return true. Actual: '+String.prototype.slice.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.slice.length !== 2) {
  $ERROR('#2: String.prototype.slice.length === 2. Actual: '+String.prototype.slice.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

