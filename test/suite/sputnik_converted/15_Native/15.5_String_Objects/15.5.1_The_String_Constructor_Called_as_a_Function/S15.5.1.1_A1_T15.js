// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.1.1_A1_T15;
* @section: 15.5.1.1;
* @assertion: When String is called as a function rather than as a constructor, it performs a type conversion;
* @description: Call String(string_object);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.1.1_A1_T15",

path: "15_Native\15.5_String_Objects\15.5.1_The_String_Constructor_Called_as_a_Function\S15.5.1.1_A1_T15.js",

assertion: "When String is called as a function rather than as a constructor, it performs a type conversion",

description: "Call String(string_object)",

test: function testcase() {
   var __obj__str = "caps";

//__obj__str.prop=1;

var __str = String(__obj__str);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str !== __obj__str) {
  $ERROR('#1: __obj__str = "caps"; __str = String(__obj__str); __str === __obj__str. Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

