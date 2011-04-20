// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.1.1_A2_T1;
* @section: 15.5.1.1;
* @assertion: If value is not supplied, the empty string "" is returned;
* @description: Call String();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.1.1_A2_T1",

path: "15_Native\15.5_String_Objects\15.5.1_The_String_Constructor_Called_as_a_Function\S15.5.1.1_A2_T1.js",

assertion: "If value is not supplied, the empty string \"\" is returned",

description: "Call String()",

test: function testcase() {
   var __str = String();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#1: __str = String(); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "") {
  $ERROR('#2: __str = String(); __str === "". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

