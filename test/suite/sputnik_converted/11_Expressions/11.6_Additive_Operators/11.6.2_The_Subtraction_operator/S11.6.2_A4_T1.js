// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.6.2_A4_T1;
* @section: 11.6.2, 11.6.3;
* @assertion: Operator x - y produces the same result as x + (-y); 
* @description: If either operand is NaN, the result is NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.2_A4_T1",

path: "11_Expressions\11.6_Additive_Operators\11.6.2_The_Subtraction_operator\S11.6.2_A4_T1.js",

assertion: "Operator x - y produces the same result as x + (-y)",

description: "If either operand is NaN, the result is NaN",

test: function testcase() {
   //CHECK#1
if (isNaN(Number.NaN - 1) !== true ) {
  $ERROR('#1: NaN - 1 === Not-a-Number. Actual: ' + (NaN - 1));
}

//CHECK#2
if (isNaN(1 - Number.NaN) !== true ) {
  $ERROR('#2: 1 - NaN === Not-a-Number. Actual: ' + (1 - NaN));
}

//CHECK#3
if (isNaN(Number.NaN - Number.POSITIVE_INFINITY) !== true ) {
  $ERROR('#3: NaN - Infinity === Not-a-Number. Actual: ' + (NaN - Infinity));
}

//CHECK#4
if (isNaN(Number.POSITIVE_INFINITY - Number.NaN) !== true ) {
  $ERROR('#4: Infinity - NaN === Not-a-Number. Actual: ' + (Infinity - NaN));
}

//CHECK#5
if (isNaN(Number.NaN - Number.NEGATIVE_INFINITY) !== true ) {
  $ERROR('#5: NaN - Infinity === Not-a-Number. Actual: ' + (NaN - Infinity));
}

//CHECK#6
if (isNaN(Number.NEGATIVE_INFINITY - Number.NaN) !== true ) {
  $ERROR('#6: Infinity - NaN === Not-a-Number. Actual: ' + (Infinity - NaN));
}

 }
});

