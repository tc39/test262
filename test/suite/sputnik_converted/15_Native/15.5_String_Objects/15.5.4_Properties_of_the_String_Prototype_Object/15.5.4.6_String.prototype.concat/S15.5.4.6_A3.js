// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A3;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]) can't change the instance to be applied;
* @description: Checking if varying the instance that is applied fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A3",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.6_String.prototype.concat\S15.5.4.6_A3.js",

assertion: "String.prototype.concat([,[...]]) can\'t change the instance to be applied",

description: "Checking if varying the instance that is applied fails",

test: function testcase() {
   var __instance = new String("one");

__instance.concat("two");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance != "one") {
  $ERROR('#1: __instance = new String("one"); __instance.concat("two");  __instance = new String("one"); __instance.concat("two"); __instance == "one". Actual: '+__instance);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

