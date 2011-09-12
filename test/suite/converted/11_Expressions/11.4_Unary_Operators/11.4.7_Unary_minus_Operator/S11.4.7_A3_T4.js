// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator -x returns -ToNumber(x)
 *
 * @section 11.4.7
 * @path 11_Expressions/11.4_Unary_Operators/11.4.7_Unary_minus_Operator/S11.4.7_A3_T4.js
 * @description Type(x) is undefined or null
 */

//CHECK#1
if (isNaN(-void 0) !== true) {
  $ERROR('#1: +void 0 === Not-a-Number. Actual: ' + (+void 0));
}

//CHECK#2
if (-null !== 0) {
  $ERROR('#2: +null === 0. Actual: ' + (+null));
}

