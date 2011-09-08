// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The unshift property of Array has not prototype property
 *
 * @section: 15.4.4.13;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.13_Array_prototype_unshift/S15.4.4.13_A5.6.js;
 * @description: Checking Array.prototype.unshift.prototype;
 */

//CHECK#1
if (Array.prototype.unshift.prototype !== undefined) {
  $ERROR('#1: Array.prototype.unshift.prototype === undefined. Actual: ' + (Array.prototype.unshift.prototype));
}

