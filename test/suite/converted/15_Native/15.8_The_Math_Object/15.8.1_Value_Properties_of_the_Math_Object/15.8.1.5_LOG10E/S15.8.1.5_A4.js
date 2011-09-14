// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property LOG10E of the Math Object has the attribute ReadOnly
 *
 * @section 15.8.1.5
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.5_LOG10E/S15.8.1.5_A4.js
 * @description Checking if Math.LOG10E property has the attribute ReadOnly
 * @strict_only
 * @negative
 */

// CHECK#1
var x = Math.LOG10E;
Math.LOG10E = 1;
if (Math.LOG10E !== x) {
  $ERROR('#1: Math.LOG10E hasn\'t ReadOnly: \'x = Math.LOG10E;Math.LOG10E = 1;Math.LOG10E === x\'');
}

