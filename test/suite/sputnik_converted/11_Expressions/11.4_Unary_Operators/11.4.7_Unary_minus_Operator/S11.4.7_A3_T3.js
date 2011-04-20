// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.7_A3_T3;
* @section: 11.4.7;
* @assertion: Operator -x returns -ToNumber(x);
* @description: Type(x) is string primitive or String object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.7_A3_T3",

path: "11_Expressions\11.4_Unary_Operators\11.4.7_Unary_minus_Operator\S11.4.7_A3_T3.js",

assertion: "Operator -x returns -ToNumber(x)",

description: "Type(x) is string primitive or String object",

test: function testcase() {
   //CHECK#1
if (-"1" !== -1) {
  $ERROR('#1: -"1" === -1. Actual: ' + (-"1"));
}

//CHECK#2
if (isNaN(-"x") !== true) {
  $ERROR('#2: -"x" === Not-a-Number. Actual: ' + (-"x"));
}

//CHECK#3
if (-new String("-1") !== 1) {
  $ERROR('#3: -new String("-1") === 1. Actual: ' + (-new String("-1")));
}

 }
});

