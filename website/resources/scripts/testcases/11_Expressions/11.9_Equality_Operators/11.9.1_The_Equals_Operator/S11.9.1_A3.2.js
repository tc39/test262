// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A3.2;
 * @section: 11.9.1, 11.9.3;
 * @assertion: If Type(x) is Boolean and Type(y) is Number, 
 * return the result of comparison ToNumber(x) == y;
 * @description: x is primitive boolean, y is primitive number;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A3.2",

path: "11.9.1, 11.9.3",

description: "x is primitive boolean, y is primitive number",

test: function testcase() {
   //CHECK#1
if ((true == 1) !== true) {
  $ERROR('#1: (true == 1) === true');
}

//CHECK#2
if ((false == "0") !== true) {
  $ERROR('#2: (false == "0") === true');
}

 }
});

