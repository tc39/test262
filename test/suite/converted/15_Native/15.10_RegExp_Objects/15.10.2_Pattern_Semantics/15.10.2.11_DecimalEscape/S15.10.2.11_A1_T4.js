// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit]
 *
 * @section 15.10.2.11, 15.10.2.9
 * @path 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.11_DecimalEscape/S15.10.2.11_A1_T4.js
 * @description DecimalIntegerLiteral is not 0
 */

var arr = /(A)\1/.exec("AA");

//CHECK#1
if ((arr === null) || (arr[0] !== "AA")) {
  $ERROR('#1: var arr = (/(A)\\1/.exec("AA")); arr[0] === "AA". Actual. ' + (arr && arr[0]));
}

//CHECK#2
if ((arr === null) || (arr[1] !== "A")) {
  $ERROR('#2: var arr = (/(A)\\1/.exec("AA")); arr[1] === "A". Actual. ' + (arr && arr[1]));
}    

