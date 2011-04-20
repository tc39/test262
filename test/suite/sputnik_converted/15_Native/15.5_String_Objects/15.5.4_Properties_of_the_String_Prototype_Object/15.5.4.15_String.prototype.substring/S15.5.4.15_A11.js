// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A11;
* @section: 15.5.4.15;
* @assertion: The length property of the substring method is 2;
* @description: Checking String.prototype.substring.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A11",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.15_String.prototype.substring\S15.5.4.15_A11.js",

assertion: "The length property of the substring method is 2",

description: "Checking String.prototype.substring.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.substring.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.substring.hasOwnProperty("length") return true. Actual: '+String.prototype.substring.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.substring.length !== 2) {
  $ERROR('#2: String.prototype.substring.length === 2. Actual: '+String.prototype.substring.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

