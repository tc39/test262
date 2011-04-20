// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.2_A1_T2;
 * @section: 7.8.2;
 * @assertion: Literal :: BooleanLiteral;
 * @description: BooleanLiteral :: false;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.2_A1_T2",

path: "07_Lexical_Conventions\7.8_Literals\7.8.2_Boolean_Literals\S7.8.2_A1_T2.js",

assertion: "Literal :: BooleanLiteral",

description: "BooleanLiteral :: false",

test: function testcase() {
   //CHECK#1
if (Boolean(false) !== false) {
  $ERROR('#1: Boolean(false) === false. Actual: Boolean(false) === ' + (Boolean(false)));
} 
 

 }
});

