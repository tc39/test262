// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x && y uses GetValue
 *
 * @path 11_Expressions/11.11_Binary_Logical_Operators/11.11.1_Logical_AND_Operator/S11.11.1_A2.1_T4.js
 * @description If ToBoolean(x) is false and GetBase(y) is null, return false
 */

//CHECK#1
if ((false && x) !== false) {
  $ERROR('#1: (false && x) === false');
}

