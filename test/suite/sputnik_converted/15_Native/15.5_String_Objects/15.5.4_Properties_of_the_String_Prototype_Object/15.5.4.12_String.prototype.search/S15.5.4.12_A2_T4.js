// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A2_T4;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp) returns ...;
* @description: Checking case sensitive of search, argument is RegExp with uppercase symbols;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A2_T4",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.12_String.prototype.search\S15.5.4.12_A2_T4.js",

assertion: "String.prototype.search (regexp) returns ...",

description: "Checking case sensitive of search, argument is RegExp with uppercase symbols",

test: function testcase() {
   var bString = new String("one two three four five");
var regExp = /Four/;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (bString.search(regExp)!== -1) {
  $ERROR('#1: var bString = new String("one two three four five"); var regExp = /Four/; bString.search(regExp)=== -1. Actual: '+bString.search(regExp));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

