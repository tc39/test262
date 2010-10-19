// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.7_A3_T2;
* @section: 11.4.7;
* @assertion: Operator -x returns -ToNumber(x);
* @description: Type(x) is number primitive or Number object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.7_A3_T2",

path: "11.4.7",

description: "Type(x) is number primitive or Number object",

test: function testcase() {
   //CHECK#1
if (-(1) !== -1) {
  $ERROR('#1: -(1) === -1. Actual: ' + (-(1)));
}

//CHECK#2
if (-new Number(-1) !== 1) {
  $ERROR('#2: -new Number(-1) === 1. Actual: ' + (-new Number(-1)));
}

 }
});

