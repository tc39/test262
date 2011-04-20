// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.6.1_A4_T9;
 * @section: 11.6.1, 11.6.3;
 * @assertion: The result of an addition is determined using the rules of IEEE 754 double-precision arithmetics; 
 * @description: The addition operator is not always associative ( x + y + z is the same (x + y) + z, not x + (y + z));
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.1_A4_T9",

path: "11_Expressions\11.6_Additive_Operators\11.6.1_The_Addition_operator\S11.6.1_A4_T9.js",

assertion: "The result of an addition is determined using the rules of IEEE 754 double-precision arithmetics",

description: "The addition operator is not always associative ( x + y + z is the same (x + y) + z, not x + (y + z))",

test: function testcase() {
   //CHECK#1
if (-Number.MAX_VALUE + Number.MAX_VALUE + Number.MAX_VALUE !== (-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE) {
  $ERROR('#1: -Number.MAX_VALUE + Number.MAX_VALUE + Number.MAX_VALUE === (-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE. Actual: ' + (-Number.MAX_VALUE + Number.MAX_VALUE + Number.MAX_VALUE));
} 

//CHECK#2
if ((-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE === -Number.MAX_VALUE + (Number.MAX_VALUE + Number.MAX_VALUE)) {
  $ERROR('#2: (-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE === -Number.MAX_VALUE + (Number.MAX_VALUE + Number.MAX_VALUE). Actual: ' + ((-Number.MAX_VALUE + Number.MAX_VALUE) + Number.MAX_VALUE));
}

//CHECK#3
if ("1" + 1 + 1 !== ("1" + 1) + 1) {
  $ERROR('#3: "1" + 1 + 1 === ("1" + 1) + 1. Actual: ' + ("1" + 1 + 1));
} 

//CHECK#4
if (("1" + 1) + 1 === "1" + (1 + 1)) {
  $ERROR('#4: ("1" + 1) + 1 !== "1" + (1 + 1)');
}

 }
});

