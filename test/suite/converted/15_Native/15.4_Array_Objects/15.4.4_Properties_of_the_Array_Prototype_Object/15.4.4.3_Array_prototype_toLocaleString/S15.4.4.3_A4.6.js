// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The toLocaleString property of Array has not prototype property
 *
 * @section: 15.4.4.3;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.3_Array_prototype_toLocaleString/S15.4.4.3_A4.6.js;
 * @description: Checking Array.prototype.toLocaleString.prototype;
 */

//CHECK#1
if (Array.prototype.toLocaleString.prototype !== undefined) {
  $ERROR('#1: Array.prototype.toLocaleString.prototype === undefined. Actual: ' + (Array.prototype.toLocaleString.prototype));
}

