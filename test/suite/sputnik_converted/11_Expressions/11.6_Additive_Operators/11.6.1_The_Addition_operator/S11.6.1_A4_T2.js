// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.6.1_A4_T2;
* @section: 11.6.1, 11.6.3;
* @assertion: The result of an addition is determined using the rules of IEEE 754 double-precision arithmetics; 
* @description: The sum of two infinities of opposite sign is NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.1_A4_T2",

path: "11_Expressions\11.6_Additive_Operators\11.6.1_The_Addition_operator\S11.6.1_A4_T2.js",

assertion: "The result of an addition is determined using the rules of IEEE 754 double-precision arithmetics",

description: "The sum of two infinities of opposite sign is NaN",

test: function testcase() {
   //CHECK#1
if (isNaN(Number.POSITIVE_INFINITY + Number.NEGATIVE_INFINITY) !== true ) {
  $ERROR('#1: Infinity + -Infinity === Not-a-Number. Actual: ' + (Infinity + -Infinity));
}

//CHECK#2
if (isNaN(Number.NEGATIVE_INFINITY + Number.POSITIVE_INFINITY) !== true ) {
  $ERROR('#2: -Infinity + Infinity === Not-a-Number. Actual: ' + (-Infinity + Infinity));
}




 }
});

