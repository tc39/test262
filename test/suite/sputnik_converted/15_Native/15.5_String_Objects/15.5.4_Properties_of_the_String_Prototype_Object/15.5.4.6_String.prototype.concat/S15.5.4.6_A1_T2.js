// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A1_T2;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]);
* @description: Arguments are equation with false and true, and instance is Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A1_T2",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.6_String.prototype.concat\S15.5.4.6_A1_T2.js",

assertion: "String.prototype.concat([,[...]])",

description: "Arguments are equation with false and true, and instance is Boolean object",

test: function testcase() {
   var __instance = new Boolean;

__instance.concat = String.prototype.concat;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.concat("\u0041",true,true+1) !== "falseAtrue2") {
  $ERROR('#1: __instance = new Boolean; __instance.concat = String.prototype.concat;  __instance.concat("\\u0041",true,true+1) === "falseAtrue2". Actual: '+__instance.concat("\u0041",true,true+1) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

