// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.1_A5.4;
 * @section: 15.1.3.1;
 * @assertion: The length property of decodeURI is 1;
 * @description: decodeURI.length === 1;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.1_A5.4",

path: "15_Native\15.1_The_Global_Object\15.1.3_URI_Handling_Function_Properties\15.1.3.1_decodeURI\S15.1.3.1_A5.4.js",

assertion: "The length property of decodeURI is 1",

description: "decodeURI.length === 1",

test: function testcase() {
   //CHECK#1
if (decodeURI.length !== 1) {
  $ERROR('#1: decodeURI.length === 1. Actual: ' + (decodeURI.length));
} 


 }
});

