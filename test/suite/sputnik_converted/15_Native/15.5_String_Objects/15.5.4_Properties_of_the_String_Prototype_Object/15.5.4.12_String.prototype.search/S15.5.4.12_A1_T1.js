// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T1;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Argument is true, and instance is object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T1",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.12_String.prototype.search\S15.5.4.12_A1_T1.js",

assertion: "String.prototype.search (regexp)",

description: "Argument is true, and instance is object",

test: function testcase() {
   var __instance = new Object(true);

__instance.search = String.prototype.search;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.search(true) !== 0) {
  $ERROR('#1: __instance = new Object(true); __instance.search = String.prototype.search;  __instance.search(true) === 0. Actual: '+__instance.search(true) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

