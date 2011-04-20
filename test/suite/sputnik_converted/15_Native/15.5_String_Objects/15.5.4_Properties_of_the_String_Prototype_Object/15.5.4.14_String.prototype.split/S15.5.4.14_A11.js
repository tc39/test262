// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.14_A11;
* @section: 15.5.4.14;
* @assertion: The length property of the split method is 2;
* @description: Checking String.prototype.split.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.14_A11",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.14_String.prototype.split\S15.5.4.14_A11.js",

assertion: "The length property of the split method is 2",

description: "Checking String.prototype.split.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.split.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.split.hasOwnProperty("length") return true. Actual: '+String.prototype.split.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.split.length !== 2) {
  $ERROR('#2: String.prototype.split.length === 2. Actual: '+String.prototype.split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

