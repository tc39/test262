// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.8_A1_T6;
* @section: 15.5.4.8;
* @assertion: String.prototype.lastIndexOf(searchString, position);
* @description: Call lastIndexOf(searchString, position) function with x argument of new String object, where x is undefined variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.8_A1_T6",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.8_String.prototype.lastIndexOf\S15.5.4.8_A1_T6.js",

assertion: "String.prototype.lastIndexOf(searchString, position)",

description: "Call lastIndexOf(searchString, position) function with x argument of new String object, where x is undefined variable",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "" lastIndexOf(undefined) evaluates to lastIndexOf("",0)
if (new String("undefined").lastIndexOf(x) !== 0) {
  $ERROR('#1: var x; new String("undefined").lastIndexOf(x) === 0. Actual: '+new String("undefined").lastIndexOf(x) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

