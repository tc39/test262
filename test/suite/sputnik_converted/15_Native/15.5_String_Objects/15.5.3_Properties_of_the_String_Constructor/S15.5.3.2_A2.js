// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.3.2_A2;
* @section: 15.5.3.2;
* @assertion: String.fromCharCode () returns empty string;
* @description: Call String.fromCharCode();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.3.2_A2",

path: "15_Native\15.5_String_Objects\15.5.3_Properties_of_the_String_Constructor\S15.5.3.2_A2.js",

assertion: "String.fromCharCode () returns empty string",

description: "Call String.fromCharCode()",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.fromCharCode() !== "") {
  $ERROR('#1: String.fromCharCode () returns empty string. Actual: '+String.fromCharCode());
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

