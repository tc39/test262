// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is +0(-0) and y is -0(+0), return false
 *
 * @section: 11.9.2, 11.9.3;
 * @path: 11_Expressions/11.9_Equality_Operators/11.9.2_The_Does_not_equals_Operator/S11.9.2_A4.2.js;
 * @description: Checking all combinations;
 */

//CHECK#1
if ((+0 != -0) !== false) {
  $ERROR('#1: (+0 != -0) === false');
}

//CHECK#2
if ((-0 != +0) !== false) {
  $ERROR('#2: (-0 != +0) === false');
}

