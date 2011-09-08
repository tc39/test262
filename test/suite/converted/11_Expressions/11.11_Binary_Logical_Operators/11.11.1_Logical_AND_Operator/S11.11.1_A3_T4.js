// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If ToBoolean(x) is false, return x
 *
 * @section: 11.11.1;
 * @path: 11_Expressions/11.11_Binary_Logical_Operators/11.11.1_Logical_AND_Operator/S11.11.1_A3_T4.js;
 * @description: Type(x) or Type(y) is changed between null and undefined;
 */

//CHECK#1
if ((undefined && true) !== undefined) {
  $ERROR('#1: (undefined && true) === undefined');
}

//CHECK#2
if ((null && false) !== null) {
  $ERROR('#2: (null && false) === null');
}

