// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property SQRT1_2 of the Math Object has the attribute ReadOnly
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.7_SQRT1_2/S15.8.1.7_A4.js
 * @description Checking if Math.SQRT1_2 property has the attribute ReadOnly
 * @strictOnly
 * @negative
 */

// CHECK#1
var x = Math.SQRT1_2;
Math.SQRT1_2 = 1;
if (Math.SQRT1_2 !== x) {
  $ERROR('#1: Math.SQRT1_2 hasn\'t ReadOnly: \'x = Math.SQRT1_2;Math.SQRT1_2 = 1;Math.SQRT1_2 === x\'');
}

