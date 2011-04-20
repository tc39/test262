// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A3_T2;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end) can be applied to object instances;
* @description: Apply String.prototype.slice to Object instance, use other value for start and end values;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A3_T2",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.13_String.prototype.slice\S15.5.4.13_A3_T2.js",

assertion: "String.prototype.slice (start, end) can be applied to object instances",

description: "Apply String.prototype.slice to Object instance, use other value for start and end values",

test: function testcase() {
   var __instance = new Object();

__instance.slice = String.prototype.slice;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.slice(8,__instance.toString().length) !== "Object]") {
  $ERROR('#1: __instance = new Object(); __instance.slice = String.prototype.slice; __instance.slice(8,__instance.toString().length) === "Object]". Actual: '+__instance.slice(8,__instance.toString().length) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

