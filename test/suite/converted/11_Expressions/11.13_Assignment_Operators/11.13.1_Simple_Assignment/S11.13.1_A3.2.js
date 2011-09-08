// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x = y returns GetValue(y)
 *
 * @section: 11.13.1;
 * @path: 11_Expressions/11.13_Assignment_Operators/11.13.1_Simple_Assignment/S11.13.1_A3.2.js;
 * @description: Checking Expression and Variable statements;
 */

//CHECK#1
var x = 0;
if ((x = 1) !== 1) {
  $ERROR('#1: var x = 0; (x = 1) === 1. Actual: ' + ((x = 1)));
}

//CHECK#2
x = 0;
if ((x = 1) !== 1) {
  $ERROR('#2: x = 0; (x = 1) === 1. Actual: ' + ((x = 1)));
}

