// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x || y uses GetValue
 *
 * @section: 11.11.2, 8.7.1, 16;
 * @path: 11_Expressions/11.11_Binary_Logical_Operators/11.11.2_Logical_OR_Operator/S11.11.2_A2.1_T4.js;
 * @description: If ToBoolean(x) is true and GetBase(y) is null, return true;
 */

//CHECK#1
if ((true || x) !== true) {
  $ERROR('#1: (true || x) === true');
}

