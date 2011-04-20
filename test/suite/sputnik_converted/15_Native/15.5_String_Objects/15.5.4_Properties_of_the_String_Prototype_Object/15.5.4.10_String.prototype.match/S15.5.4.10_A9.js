// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A9;
* @section: 15.5.4.10;
* @assertion: The String.prototype.match.length property has the attribute DontDelete;
* @description: Checking if deleting the String.prototype.match.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.10_A9",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.10_String.prototype.match\S15.5.4.10_A9.js",

assertion: "The String.prototype.match.length property has the attribute DontDelete",

description: "Checking if deleting the String.prototype.match.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.match.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.match.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.match.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.match.length) {
  $ERROR('#1: delete String.prototype.match.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.match.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.match.length; String.prototype.match.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.match.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

