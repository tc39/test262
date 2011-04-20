// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A4.3;
 * @section: 11.9.1, 11.9.3;
 * @assertion: Type(x) and Type(y) are Number-s minus NaN, +0, -0. 
 * Return true, if x is the same number value as y; otherwise, return false;
 * @description: x and y are primitive numbers;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A4.3",

path: "11_Expressions\11.9_Equality_Operators\11.9.1_The_Equals_Operator\S11.9.1_A4.3.js",

assertion: "Type(x) and Type(y) are Number-s minus NaN, +0, -0.",

description: "x and y are primitive numbers",

test: function testcase() {
   //CHECK#1
if ((Number.POSITIVE_INFINITY == Number.POSITIVE_INFINITY) !== true) {
  $ERROR('#1: (+Infinity == +Infinity) === true');
}

//CHECK#2
if ((Number.NEGATIVE_INFINITY == Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#2: (-Infinity == -Infinity) === true');
}

//CHECK#3
if ((Number.POSITIVE_INFINITY == -Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#3: (+Infinity == -(-Infinity)) === true');
}

//CHECK#4
if ((1 == 0.999999999999) !== false) {
  $ERROR('#4: (1 == 0.999999999999) === false');
}

//CHECK#5
if ((1.0 == 1) !== true) {
  $ERROR('#5: (1.0 == 1) === true');
}

 }
});

