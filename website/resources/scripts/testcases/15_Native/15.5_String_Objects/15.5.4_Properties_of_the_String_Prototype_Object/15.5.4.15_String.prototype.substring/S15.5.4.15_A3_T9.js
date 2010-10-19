// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A3_T9;
* @section: 15.5.4.15;
* @assertion: String.prototype.substring (start, end) can be applied to non String object instance and 
* returns a string value(not object);
* @description: Apply String.prototype.substring to Math instance. Start is Math.PI, end is -10;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A3_T9",

path: "15.5.4.15",

description: "Apply String.prototype.substring to Math instance. Start is Math.PI, end is -10",

test: function testcase() {
   var __instance = Math;
 
__instance.substring = String.prototype.substring;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.substring(Math.PI, -10) !== "[ob") {
  $ERROR('#1: __instance = Math; __instance.substring = String.prototype.substring;  __instance.substring(Math.PI, -10) === "[ob". Actual: '+__instance.substring(Math.PI, -10) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

