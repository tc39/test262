// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Type(x) and Type(y) are String-s.
 * Return true, if x and y are exactly the same sequence of characters; otherwise, return false
 *
 * @path 11_Expressions/11.9_Equality_Operators/11.9.2_The_Does_not_equals_Operator/S11.9.2_A5.1.js
 * @description x and y are primitive strings
 */

//CHECK#1
if (("" != "") !== false) {
  $ERROR('#1: ("" != "") === false');
}

//CHECK#2
if ((" " != " ") !== false) {
  $ERROR('#2: " (" != " ") === false');
}

//CHECK#3
if ((" " != "") !== true) {
  $ERROR('#3: " (" != "") === true');
}

//CHECK#4
if (("string" != "string") !== false) {
  $ERROR('#4: ("string" != "string") === false');
}

//CHECK#5
if ((" string" != "string ") !== true) {
  $ERROR('#5: (" string" != "string ") === true');
}

//CHECK#6
if (("1.0" != "1") !== true) {
  $ERROR('#6: ("1.0" != "1") === true');
}

//CHECK#7
if (("0xff" != "255") !== true) {
  $ERROR('#7: ("0xff" != "255") === true');
}

