// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The isFinite property has not prototype property
 *
 * @section 15.1.2.5
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.5_isFinite/S15.1.2.5_A2.6.js
 * @description Checking isFinit.prototype
 */

//CHECK#1
if (isFinite.prototype !== undefined) {
  $ERROR('#1: isFinite.prototype === undefined. Actual: ' + (isFinite.prototype));
}

