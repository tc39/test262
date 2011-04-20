// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.3_A3_T2.9;
 * @section: 11.10.3;
 * @assertion: Operator x | y returns ToNumber(x) | ToNumber(y); 
 * @description: Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.3_A3_T2.9",

path: "11_Expressions\11.10_Binary_Bitwise_Operators\11.10.3_OR_Operator\S11.10.3_A3_T2.9.js",

assertion: "Operator x | y returns ToNumber(x) | ToNumber(y)",

description: "Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Null",

test: function testcase() {
   //CHECK#1
if ((true | null) !== 1) {
  $ERROR('#1: (true | null) === 1. Actual: ' + ((true | null)));
}

//CHECK#2
if ((null | true) !== 1) {
  $ERROR('#2: (null | true) === 1. Actual: ' + ((null | true)));
}

//CHECK#3
if ((new Boolean(true) | null) !== 1) {
  $ERROR('#3: (new Boolean(true) | null) === 1. Actual: ' + ((new Boolean(true) | null)));
}

//CHECK#4
if ((null | new Boolean(true)) !== 1) {
  $ERROR('#4: (null | new Boolean(true)) === 1. Actual: ' + ((null | new Boolean(true))));
}

 }
});

