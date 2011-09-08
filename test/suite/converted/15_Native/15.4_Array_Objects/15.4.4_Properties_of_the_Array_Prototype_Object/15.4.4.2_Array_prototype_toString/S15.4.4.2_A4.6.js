// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The toString property of Array has not prototype property
 *
 * @section: 15.4.4.2;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.2_Array_prototype_toString/S15.4.4.2_A4.6.js;
 * @description: Checking Array.prototype.toString.prototype;
 */

//CHECK#1
if (Array.prototype.toString.prototype !== undefined) {
  $ERROR('#1: Array.prototype.toString.prototype === undefined. Actual: ' + (Array.prototype.toString.prototype));
}

