// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The isNaN property has not prototype property
 *
 * @section 15.1.2.4
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.4_isNaN/S15.1.2.4_A2.6.js
 * @description Checking isNaN.prototype
 */

//CHECK#1
if (isNaN.prototype !== undefined) {
  $ERROR('#1: isNaN.prototype === undefined. Actual: ' + (isNaN.prototype));
}

