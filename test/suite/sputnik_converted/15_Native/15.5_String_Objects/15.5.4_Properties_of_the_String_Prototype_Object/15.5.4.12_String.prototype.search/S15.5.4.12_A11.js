// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A11;
* @section: 15.5.4.12;
* @assertion: The length property of the search method is 1;
* @description: Checking String.prototype.search.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A11",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.12_String.prototype.search\S15.5.4.12_A11.js",

assertion: "The length property of the search method is 1",

description: "Checking String.prototype.search.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.search.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.search.hasOwnProperty("length") return true. Actual: '+String.prototype.search.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.search.length !== 1) {
  $ERROR('#2: String.prototype.search.length === 1. Actual: '+String.prototype.search.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

