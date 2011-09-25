// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x-- returns ToNumber(x)
 *
 * @path 11_Expressions/11.3_PostfixExpressions/11.3.2_Postfix_Decrement_Operator/S11.3.2_A4_T4.js
 * @description If Type(x) is undefined or null
 */

//CHECK#1
var x; 
var y = x--;
if (isNaN(y) !== true) {
  $ERROR('#1: var x; var y = x--; y === Not-a-Number. Actual: ' + (y));
}

//CHECK#2
var x = null;
var y = x--;
if (y !== 0) {
  $ERROR('#2: var x = null; var y = x--; y === 0. Actual: ' + (y));
}

