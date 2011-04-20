// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.5_A1_T5;
* @section: 15.5.4.5;
* @assertion: String.prototype.charCodeAt(pos);
* @description: Call charCodeAt() function with null argument of function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.5_A1_T5",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.5_String.prototype.charCodeAt\S15.5.4.5_A1_T5.js",

assertion: "String.prototype.charCodeAt(pos)",

description: "Call charCodeAt() function with null argument of function object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToInteger(null) evaluates to 0 charCodeAt() evaluates to charCodeAt(0)
if (function(){return "lego"}().charCodeAt(null) !== 0x6C) {
  $ERROR('#1: function(){return "lego"}().charCodeAt(null) === 0x6C. Actual: '+function(){return "lego"}().charCodeAt(null) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

