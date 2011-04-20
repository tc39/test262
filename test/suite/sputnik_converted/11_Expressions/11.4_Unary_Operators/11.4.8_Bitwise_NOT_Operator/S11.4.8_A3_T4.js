// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.8_A3_T4;
* @section: 11.4.8;
* @assertion: Operator ~x returns ~ToInt32(x);
* @description: Type(x) is undefined or null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.8_A3_T4",

path: "11_Expressions\11.4_Unary_Operators\11.4.8_Bitwise_NOT_Operator\S11.4.8_A3_T4.js",

assertion: "Operator ~x returns ~ToInt32(x)",

description: "Type(x) is undefined or null",

test: function testcase() {
   //CHECK#1
if (~void 0 !== -1) {
  $ERROR('#1: ~void 0 === -1. Actual: ' + (~void 0));
}

//CHECK#2
if (~null !== -1) {
  $ERROR('#2: ~null === -1. Actual: ' + (~null));
}

 }
});

