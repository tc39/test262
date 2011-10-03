// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) is Object and Type(y) is Number,
 * return ToPrimitive(x) != y
 *
 * @path 11_Expressions/11.9_Equality_Operators/11.9.2_The_Does_not_equals_Operator/S11.9.2_A7.4.js
 * @description x is object, y is primitive number
 */

//CHECK#1
if ((new Boolean(true) != 1) !== false) {
  $ERROR('#1: (new Boolean(true) != 1) === false');
}

//CHECK#2
if ((new Number(-1) != -1) !== false) {
  $ERROR('#2: (new Number(-1) != -1) === false');
}

//CHECK#3
if ((new String("-1") != -1) !== false) {
  $ERROR('#3: (new String("-1") != -1) === false');
}

