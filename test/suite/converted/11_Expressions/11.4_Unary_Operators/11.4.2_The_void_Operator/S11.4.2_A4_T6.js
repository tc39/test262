// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator "void" evaluates UnaryExpression and returns undefined
 *
 * @section: 11.4.2;
 * @path: 11_Expressions/11.4_Unary_Operators/11.4.2_The_void_Operator/S11.4.2_A4_T6.js;
 * @description: Checking Simple Assignment operator;
 */

//CHECK#1
var x = 0;
if (void (x = 1) !== undefined) {
  $ERROR('#1: var x = 0; void (x = 1) === undefined. Actual: ' + (void (x = 1)));
} else {
  if (x !== 1) {
    $ERROR('#1: var x = 0; void (x = 1); x === 1. Actual: ' + (x));
  } 
}

