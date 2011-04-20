// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.2_A4_T4;
 * @section: 11.5.2;
 * @assertion: The result of division is determined by the specification of IEEE 754 arithmetics; 
 * @description: Division of an infinity by an infinity results in NaN;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.2_A4_T4",

path: "11_Expressions\11.5_Multiplicative_Operators\11.5.2_Applying_the_slash_Operator\S11.5.2_A4_T4.js",

assertion: "The result of division is determined by the specification of IEEE 754 arithmetics",

description: "Division of an infinity by an infinity results in NaN",

test: function testcase() {
   //CHECK#1
if (isNaN(Number.NEGATIVE_INFINITY / Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#1: -Infinity / -Infinity === Not-a-Number. Actual: ' + (-Infinity / -Infinity));
}

//CHECK#2
if (isNaN(Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY) !== true) {
  $ERROR('#2: Infinity / Infinity === Not-a-Number. Actual: ' + (Infinity / Infinity));
}

//CHECK#3
if (isNaN(Number.NEGATIVE_INFINITY / Number.POSITIVE_INFINITY) !== true) {
  $ERROR('#3: -Infinity / Infinity === Not-a-Number. Actual: ' + (-Infinity / Infinity));
}

//CHECK#4
if (isNaN(Number.POSITIVE_INFINITY / Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#4: Infinity / -Infinity === Not-a-Number. Actual: ' + (Infinity / -Infinity));
}

 }
});

