// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A1_T7;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end);
* @description: Arguments are symbol and undefined, and instance is String;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A1_T7",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.13_String.prototype.slice\S15.5.4.13_A1_T7.js",

assertion: "String.prototype.slice (start, end)",

description: "Arguments are symbol and undefined, and instance is String",

test: function testcase() {
   //since ToInteger("e") yelds 0
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String(void 0).slice("e",undefined) !== "undefined") {
  $ERROR('#1: String(void 0).slice("e",undefined) === "undefined". Actual: '+String(void 0).slice("e",undefined) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

