// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.19_A1_T5;
* @section: 15.5.4.19;
* @assertion: String.prototype.toLocaleUpperCase();
* @description: Call toLocaleUpperCase() function of function call;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.19_A1_T5",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.19_String.prototype.toLocaleUpperCase\S15.5.4.19_A1_T5.js",

assertion: "String.prototype.toLocaleUpperCase()",

description: "Call toLocaleUpperCase() function of function call",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" match(null) evaluates to match("null")
if (function(){return "GnulLuNa"}().toLocaleUpperCase() !== "GNULLUNA") {
  $ERROR('#1: function(){return "GnulLuNa"}().toLocaleUpperCase() === "GNULLUNA". Actual: '+function(){return "GnulLuNa"}().toLocaleUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

