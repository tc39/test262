// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.3.2_A3_T1;
* @section: 15.5.3.2;
* @assertion: String.fromCharCode ( [ char0 [ , char1 [ , ... ] ] ] );
* @description: Call String.fromCharCode(65,66,66,65);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.3.2_A3_T1",

path: "15_Native\15.5_String_Objects\15.5.3_Properties_of_the_String_Constructor\S15.5.3.2_A3_T1.js",

assertion: "String.fromCharCode ( [ char0 [ , char1 [ , ... ] ] ] )",

description: "Call String.fromCharCode(65,66,66,65)",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.fromCharCode(65,66,66,65) !== "ABBA") {
  $ERROR('#1: String.fromCharCode(65,66,66,65) === "ABBA". Actual: String.fromCharCode(65,66,66,65) ==='+String.fromCharCode(65,66,66,65) ); 
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

