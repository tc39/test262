// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.5_A3;
* @section: 15.5.4.5;
* @assertion: When String.prototype.charCodeAt(pos) calls if ToInteger(pos) not less than ToString(this value) the NaN returns;
* @description: pos is bigger of string length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.5_A3",

path: "15.5.4.5",

description: "pos is bigger of string length",

test: function testcase() {
   var __instance = new String("ABC");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!isNaN(__instance.charCodeAt(3))) {
  $ERROR('#1: __instance = new String("ABC"); isNaN(__instance.charCodeAt(3)) return true. Actual: '+isNaN(__instance.charCodeAt(3)));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

