// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A1_T14;
* @section: 15.5.4.16;
* @assertion: String.prototype.toLowerCase();
* @description: Call toLowerCase() function for RegExp object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A1_T14",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.16_String.prototype.toLowerCase\S15.5.4.16_A1_T14.js",

assertion: "String.prototype.toLowerCase()",

description: "Call toLowerCase() function for RegExp object",

test: function testcase() {
   var __reg = new RegExp("ABC");
__reg.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__reg.toLowerCase() !== "/abc/") {
  $ERROR('#1: var __reg = new RegExp("ABC"); __reg.toLowerCase = String.prototype.toLowerCase; __reg.toLowerCase() === "/abc/". Actual: '+__reg.toLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

