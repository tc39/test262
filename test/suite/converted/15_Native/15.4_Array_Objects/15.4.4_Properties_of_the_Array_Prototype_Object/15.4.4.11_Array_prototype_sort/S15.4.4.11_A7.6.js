// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The sort property of Array has not prototype property
 *
 * @section: 15.4.4.11;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.11_Array_prototype_sort/S15.4.4.11_A7.6.js;
 * @description: Checking Array.prototype.sort.prototype;
 */

//CHECK#1
if (Array.prototype.sort.prototype !== undefined) {
  $ERROR('#1: Array.prototype.sort.prototype === undefined. Actual: ' + (Array.prototype.sort.prototype));
}

