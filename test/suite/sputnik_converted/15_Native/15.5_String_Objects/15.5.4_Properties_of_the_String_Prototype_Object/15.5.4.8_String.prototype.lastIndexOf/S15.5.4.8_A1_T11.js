// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.8_A1_T11;
* @section: 15.5.4.8;
* @assertion: String.prototype.lastIndexOf(searchString, position);
* @description: Instance is Date(0) object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.8_A1_T11",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.8_String.prototype.lastIndexOf\S15.5.4.8_A1_T11.js",

assertion: "String.prototype.lastIndexOf(searchString, position)",

description: "Instance is Date(0) object",

test: function testcase() {
   var __instance = new Date(100000000);

__instance.lastIndexOf = String.prototype.lastIndexOf;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((__instance.lastIndexOf('1970')) !== 11) {
  $ERROR('#1: __instance = new Date(0); __instance.lastIndexOf = String.prototype.lastIndexOf;  __instance.lastIndexOf(\'1970\') === 11. Actual: '+(__instance.lastIndexOf('1970')) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

