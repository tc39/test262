// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A1_T5;
* @section: 15.5.4.16;
* @assertion: String.prototype.toLowerCase();
* @description: Call toLowerCase() function for function call;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A1_T5",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.16_String.prototype.toLowerCase\S15.5.4.16_A1_T5.js",

assertion: "String.prototype.toLowerCase()",

description: "Call toLowerCase() function for function call",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" match(null) evaluates to match("null")
if (function(){return "GnulLuNa"}().toLowerCase() !== "gnulluna") {
  $ERROR('#1: function(){return "GnulLuNa"}().toLowerCase() === "gnulluna". Actual: '+function(){return "GnulLuNa"}().toLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

