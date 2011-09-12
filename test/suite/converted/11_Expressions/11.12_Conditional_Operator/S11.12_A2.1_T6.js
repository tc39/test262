// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x ? y : z uses GetValue
 *
 * @section 11.12, 8.7.1, 16
 * @path 11_Expressions/11.12_Conditional_Operator/S11.12_A2.1_T6.js
 * @description If ToBoolean(x) is false and GetBase(y) is null, return z
 */

//CHECK#1
var z = new Object();
if ((false ? y : z) !== z) {
  $ERROR('#1: var z = new Object(); (false ? y : z) === z');
}

