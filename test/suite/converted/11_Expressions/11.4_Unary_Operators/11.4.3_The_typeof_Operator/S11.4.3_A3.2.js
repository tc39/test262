// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Result of applying "typeof" operator to null is "object"
 *
 * @path 11_Expressions/11.4_Unary_Operators/11.4.3_The_typeof_Operator/S11.4.3_A3.2.js
 * @description typeof null === "object"
 */

//CHECK#1
if (typeof null !== "object") {
  $ERROR('#1: typeof null === "object". Actual: ' + (typeof null));
}

//CHECK#2
if (typeof RegExp("0").exec("1") !== "object") {
  $ERROR('#2: typeof RegExp("0").exec("1") === "object". Actual: ' + (typeof RegExp("0").exec("1")));
}

