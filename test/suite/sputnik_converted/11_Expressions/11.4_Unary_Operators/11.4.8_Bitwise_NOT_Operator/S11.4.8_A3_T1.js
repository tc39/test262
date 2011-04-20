// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.8_A3_T1;
* @section: 11.4.8;
* @assertion: Operator ~x returns ~ToInt32(x);
* @description: Type(x) is boolean primitive or Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.8_A3_T1",

path: "11_Expressions\11.4_Unary_Operators\11.4.8_Bitwise_NOT_Operator\S11.4.8_A3_T1.js",

assertion: "Operator ~x returns ~ToInt32(x)",

description: "Type(x) is boolean primitive or Boolean object",

test: function testcase() {
   //CHECK#1
if (~false !== -1) {
  $ERROR('#1: ~false === -1. Actual: ' + (~false));
}

//CHECK#2
if (~new Boolean(true) !== -2) {
  $ERROR('#2: ~new Boolean(true) === -2. Actual: ' + (~new Boolean(true)));
}

//CHECK#3
if (~new Boolean(false) !== -1) {
  $ERROR('#3: ~new Boolean(false) === -1. Actual: ' + (~new Boolean(false)));
}

 }
});

