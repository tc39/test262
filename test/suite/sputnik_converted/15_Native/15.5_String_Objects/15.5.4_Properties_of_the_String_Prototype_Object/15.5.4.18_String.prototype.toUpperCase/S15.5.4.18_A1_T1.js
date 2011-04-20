// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.18_A1_T1;
* @section: 15.5.4.18;
* @assertion: String.prototype.toUpperCase();
* @description: Arguments is true, and instance is object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.18_A1_T1",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.18_String.prototype.toUpperCase\S15.5.4.18_A1_T1.js",

assertion: "String.prototype.toUpperCase()",

description: "Arguments is true, and instance is object",

test: function testcase() {
   var __instance = new Object(true);

__instance.toUpperCase = String.prototype.toUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toUpperCase() !== "TRUE") {
  $ERROR('#1: __instance = new Object(true); __instance.toUpperCase = String.prototype.toUpperCase;  __instance.toUpperCase() === "TRUE". Actual: '+__instance.toUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

