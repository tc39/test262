// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A3.3;
 * @section: 11.9.1, 11.9.3;
 * @assertion: If Type(y) is Number and Type(y) is Boolean, 
 * return the result of comparison x == ToNumber(y);
 * @description: x is primitive number, y is primitive boolean;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A3.3",

path: "11_Expressions\11.9_Equality_Operators\11.9.1_The_Equals_Operator\S11.9.1_A3.3.js",

assertion: "If Type(y) is Number and Type(y) is Boolean,",

description: "x is primitive number, y is primitive boolean",

test: function testcase() {
   //CHECK#1
if ((0 == false) !== true) {
  $ERROR('#1: (0 == false) === true');
}

//CHECK#2
if (("1" == true) !== true) {
  $ERROR('#2: ("1" == true) === true');
}

 }
});

