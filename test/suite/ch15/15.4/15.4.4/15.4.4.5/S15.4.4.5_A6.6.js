// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The join property of Array has not prototype property
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.5_Array_prototype_join/S15.4.4.5_A6.6.js
 * @description Checking Array.prototype.join.prototype
 */

//CHECK#1
if (Array.prototype.join.prototype !== undefined) {
  $ERROR('#1: Array.prototype.join.prototype === undefined. Actual: ' + (Array.prototype.join.prototype));
}

