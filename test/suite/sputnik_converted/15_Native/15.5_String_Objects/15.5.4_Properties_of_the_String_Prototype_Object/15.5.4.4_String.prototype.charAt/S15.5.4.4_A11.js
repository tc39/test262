// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.4_A11;
* @section: 15.5.4.4;
* @assertion: The length property of the charAt method is 1;
* @description: Checking String.prototype.charAt.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.4_A11",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.4_String.prototype.charAt\S15.5.4.4_A11.js",

assertion: "The length property of the charAt method is 1",

description: "Checking String.prototype.charAt.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.charAt.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.charAt.hasOwnProperty("length") return true. Actual: '+String.prototype.charAt.hasOwnProperty("length")); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.charAt.length !== 1) {
  $ERROR('#2: String.prototype.charAt.length === 1. Actual: '+String.prototype.charAt.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

