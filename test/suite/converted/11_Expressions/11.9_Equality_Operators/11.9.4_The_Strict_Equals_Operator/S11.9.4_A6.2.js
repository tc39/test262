// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) and Type(y) are Null-s, return true
 *
 * @section 11.9.4, 11.9.6
 * @path 11_Expressions/11.9_Equality_Operators/11.9.4_The_Strict_Equals_Operator/S11.9.4_A6.2.js
 * @description null === null
 */

//CHECK#1
if (!(null === null)) {
  $ERROR('#1: null === null');
}

