// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.8_A1_T8;
* @section: 15.5.4.8;
* @assertion: String.prototype.lastIndexOf(searchString, position);
* @description: Call lastIndexOf(searchString, position) function with void 0 argument of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.8_A1_T8",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.8_String.prototype.lastIndexOf\S15.5.4.8_A1_T8.js",

assertion: "String.prototype.lastIndexOf(searchString, position)",

description: "Call lastIndexOf(searchString, position) function with void 0 argument of string object",

test: function testcase() {
   var __obj = {toString:function(){}};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(void 0) evaluates to "undefined" lastIndexOf(void 0) evaluates to lastIndexOf("undefined",0)
if (String(__obj).lastIndexOf(void 0) !== 0) {
  $ERROR('#1: __obj = {toString:function(){}}; String(__obj).lastIndexOf(void 0) === 0. Actual: '+String(__obj).lastIndexOf(void 0) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

