// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x @= y uses PutValue(x, x @ y)
 *
 * @section: 11.13.2;
 * @path: 11_Expressions/11.13_Assignment_Operators/11.13.2_Compound_Assignment/S11.13.2_A3.1_T4.js;
 * @description: Checking Expression and Variable statements for x += y;
 */

//CHECK#1
var x = 1;
x += 1; 
if (x !== 2) {
  $ERROR('#1: var x = 1; x += 1; x === 2. Actual: ' + (x));
}

//CHECK#2
y = 1;
y += 1;
if (y !== 2) {
  $ERROR('#2: y = 1; y += 1; y === 2. Actual: ' + (y));
}

