// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A1_T1;
* @section: 15.5.4.11;
* @assertion: String.prototype.replace (searchValue, replaceValue);
* @description: Arguments are true and 1, and instance is object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A1_T1",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.11_String.prototype.replace\S15.5.4.11_A1_T1.js",

assertion: "String.prototype.replace (searchValue, replaceValue)",

description: "Arguments are true and 1, and instance is object",

test: function testcase() {
   var __instance = new Object(true);

__instance.replace = String.prototype.replace;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.replace(true, 1) !== "1") {
  $ERROR('#1: __instance = new Object(true); __instance.replace = String.prototype.replace;  __instance.replace(true, 1) === "1". Actual: '+__instance.replace(true, 1) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

