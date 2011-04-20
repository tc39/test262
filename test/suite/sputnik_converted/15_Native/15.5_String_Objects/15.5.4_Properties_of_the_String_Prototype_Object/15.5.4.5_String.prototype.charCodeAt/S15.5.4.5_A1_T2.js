// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.5_A1_T2;
* @section: 15.5.4.5;
* @assertion: String.prototype.charCodeAt(pos);
* @description: pos is equation with false and true, and instance is Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.5_A1_T2",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.5_String.prototype.charCodeAt\S15.5.4.5_A1_T2.js",

assertion: "String.prototype.charCodeAt(pos)",

description: "pos is equation with false and true, and instance is Boolean object",

test: function testcase() {
   var __instance = new Boolean;

__instance.charCodeAt = String.prototype.charCodeAt;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.charCodeAt(false)!==0x66) {
  $ERROR('#1: __instance = new Boolean; __instance.charCodeAt = String.prototype.charCodeAt; __instance.charCodeAt(false)===0x66. Actual: '+__instance.charCodeAt(false));   
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__instance.charCodeAt(true)!==0x61) {
  $ERROR('#2: __instance = new Boolean; __instance.charCodeAt = String.prototype.charCodeAt; __instance.charCodeAt(true)===0x61. Actual: '+__instance.charCodeAt(true));   
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__instance.charCodeAt(true+1) !== 0x6C) {
  $ERROR('#3: __instance = new Boolean; __instance.charCodeAt = String.prototype.charCodeAt; __instance.charCodeAt(true+1) === 0x6C. Actual: '+__instance.charCodeAt(true+1) );   
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

