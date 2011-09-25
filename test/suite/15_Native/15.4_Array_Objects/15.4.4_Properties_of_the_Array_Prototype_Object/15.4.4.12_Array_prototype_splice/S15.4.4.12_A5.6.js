// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The splice property of Array has not prototype property
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.12_Array_prototype_splice/S15.4.4.12_A5.6.js
 * @description Checking Array.prototype.splice.prototype
 */

//CHECK#1
if (Array.prototype.splice.prototype !== undefined) {
  $ERROR('#1: Array.prototype.splice.prototype === undefined. Actual: ' + (Array.prototype.splice.prototype));
}

