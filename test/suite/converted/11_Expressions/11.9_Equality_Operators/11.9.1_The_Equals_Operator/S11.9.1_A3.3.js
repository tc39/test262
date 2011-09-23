// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(y) is Number and Type(y) is Boolean,
 * return the result of comparison x == ToNumber(y)
 *
 * @path 11_Expressions/11.9_Equality_Operators/11.9.1_The_Equals_Operator/S11.9.1_A3.3.js
 * @description x is primitive number, y is primitive boolean
 */

//CHECK#1
if ((0 == false) !== true) {
  $ERROR('#1: (0 == false) === true');
}

//CHECK#2
if (("1" == true) !== true) {
  $ERROR('#2: ("1" == true) === true');
}

