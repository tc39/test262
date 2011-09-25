// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x = y PutValue(x, y)
 *
 * @path 11_Expressions/11.13_Assignment_Operators/11.13.1_Simple_Assignment/S11.13.1_A3.1.js
 * @description Checking Expression and Variable statements
 */

//CHECK#1
var x = 1;
if (x !== 1) {
  $ERROR('#1: var x = 1; x === 1. Actual: ' + (x));
}

//CHECK#2
y = 1;
if (y !== 1) {
  $ERROR('#2: y = 1; y === 1. Actual: ' + (y));
}

