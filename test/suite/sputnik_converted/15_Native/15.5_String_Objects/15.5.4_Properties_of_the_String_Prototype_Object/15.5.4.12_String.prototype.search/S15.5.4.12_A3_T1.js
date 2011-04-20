// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A3_T1;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp) ignores global properties of regexp;
* @description: Checking results of search regexp with and without global properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A3_T1",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.12_String.prototype.search\S15.5.4.12_A3_T1.js",

assertion: "String.prototype.search (regexp) ignores global properties of regexp",

description: "Checking results of search regexp with and without global properties",

test: function testcase() {
   var aString = new String("power of the power of the power of the power of the power of the power of the great sword");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (aString.search(/the/)!== aString.search(/the/g)) {
  $ERROR('#1: var aString = new String("power of the power of the power of the power of the power of the power of the great sword"); aString.search(/the/)=== aString.search(/the/g). Actual: '+aString.search(/the/));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

