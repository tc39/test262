// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A9;
* @section: 15.5.4.13;
* @assertion: The String.prototype.slice.length property has the attribute DontDelete;
* @description: Checking if deleting the String.prototype.slice.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A9",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.13_String.prototype.slice\S15.5.4.13_A9.js",

assertion: "The String.prototype.slice.length property has the attribute DontDelete",

description: "Checking if deleting the String.prototype.slice.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.slice.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.slice.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.slice.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.slice.length) {
  $ERROR('#1: delete String.prototype.slice.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.slice.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.slice.length; String.prototype.slice.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.slice.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

