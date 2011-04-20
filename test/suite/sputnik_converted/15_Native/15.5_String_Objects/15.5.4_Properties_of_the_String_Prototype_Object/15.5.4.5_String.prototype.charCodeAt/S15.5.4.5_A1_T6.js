// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.5_A1_T6;
* @section: 15.5.4.5;
* @assertion: String.prototype.charCodeAt(pos);
* @description: Call charCodeAt() function with x argument of new String object, where x is undefined variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.5_A1_T6",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.5_String.prototype.charCodeAt\S15.5.4.5_A1_T6.js",

assertion: "String.prototype.charCodeAt(pos)",

description: "Call charCodeAt() function with x argument of new String object, where x is undefined variable",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToInteger(undefined) evaluates to 0 charCodeAt() evaluates to charCodeAt(0)
if (new String("lego").charCodeAt(x) !== 0x6C) {
  $ERROR('#1: var x; new String("lego").charCodeAt(x) === 0x6C. Actual: new String("lego").charCodeAt(x) ==='+new String("lego").charCodeAt(x) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

