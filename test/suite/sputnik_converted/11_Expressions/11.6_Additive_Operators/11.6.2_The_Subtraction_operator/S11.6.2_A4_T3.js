// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.6.2_A4_T3;
* @section: 11.6.2, 11.6.3;
* @assertion: Operator x - y produces the same result as x + (-y); 
* @description: The difference of two infinities of the same sign is NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.2_A4_T3",

path: "11_Expressions\11.6_Additive_Operators\11.6.2_The_Subtraction_operator\S11.6.2_A4_T3.js",

assertion: "Operator x - y produces the same result as x + (-y)",

description: "The difference of two infinities of the same sign is NaN",

test: function testcase() {
   //CHECK#1
if (isNaN(Number.POSITIVE_INFINITY - Number.POSITIVE_INFINITY) !== true ) {
  $ERROR('#1: Infinity - Infinity === Not-a-Number. Actual: ' + (Infinity - Infinity));
}

//CHECK#2
if (isNaN(Number.NEGATIVE_INFINITY - Number.NEGATIVE_INFINITY) !== true ) {
  $ERROR('#2: -Infinity - -Infinity === Not-a-Number. Actual: ' + (-Infinity - -Infinity));
}




 }
});

