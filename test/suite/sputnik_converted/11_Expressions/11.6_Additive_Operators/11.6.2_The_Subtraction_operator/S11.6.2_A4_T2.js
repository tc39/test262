// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.6.2_A4_T2;
* @section: 11.6.2, 11.6.3;
* @assertion: Operator x - y produces the same result as x + (-y); 
* @description: The difference of two infinities of opposite sign is the infinity of minuend sign;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.2_A4_T2",

path: "11_Expressions\11.6_Additive_Operators\11.6.2_The_Subtraction_operator\S11.6.2_A4_T2.js",

assertion: "Operator x - y produces the same result as x + (-y)",

description: "The difference of two infinities of opposite sign is the infinity of minuend sign",

test: function testcase() {
   //CHECK#1
if (Number.POSITIVE_INFINITY - Number.NEGATIVE_INFINITY !== Number.POSITIVE_INFINITY ) {
  $ERROR('#1: Infinity - -Infinity === Infinity. Actual: ' + (Infinity - -Infinity));
}

//CHECK#2
if (Number.NEGATIVE_INFINITY - Number.POSITIVE_INFINITY !== Number.NEGATIVE_INFINITY ) {
  $ERROR('#2: -Infinity - Infinity === -Infinity. Actual: ' + (-Infinity - Infinity));
}




 }
});

