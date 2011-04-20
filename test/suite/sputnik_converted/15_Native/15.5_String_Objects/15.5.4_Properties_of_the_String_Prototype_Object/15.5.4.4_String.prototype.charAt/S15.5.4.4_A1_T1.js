// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.4_A1_T1;
* @section: 15.5.4.4;
* @assertion: String.prototype.charAt(pos);
* @description: pos is false and true, and instance is object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.4_A1_T1",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.4_String.prototype.charAt\S15.5.4.4_A1_T1.js",

assertion: "String.prototype.charAt(pos)",

description: "pos is false and true, and instance is object",

test: function testcase() {
   var __instance = new Object(42);

__instance.charAt = String.prototype.charAt;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.charAt(false)+__instance.charAt(true) !== "42") {
  $ERROR('#1: __instance = new Object(42); __instance.charAt = String.prototype.charAt;  __instance = new Object(42); __instance.charAt = String.prototype.charAt; __instance.charAt(false)+__instance.charAt(true) === "42". Actual: '+__instance.charAt(false)+__instance.charAt(true) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

