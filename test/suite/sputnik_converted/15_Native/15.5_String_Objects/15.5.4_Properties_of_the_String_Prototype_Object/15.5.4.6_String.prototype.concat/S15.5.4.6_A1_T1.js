// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A1_T1;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]);
* @description: Arguments are false and true, and instance is object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A1_T1",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.6_String.prototype.concat\S15.5.4.6_A1_T1.js",

assertion: "String.prototype.concat([,[...]])",

description: "Arguments are false and true, and instance is object",

test: function testcase() {
   var __instance = new Object(42);

__instance.concat = String.prototype.concat;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.concat(false,true) !== "42falsetrue") {
  $ERROR('#1: __instance = new Object(42); __instance.concat = String.prototype.concat;  __instance.concat(false,true) === "42falsetrue". Actual: '+__instance.concat(false,true) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

