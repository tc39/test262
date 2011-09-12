// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object prototype object has not prototype
 *
 * @section 15.2.4, 8.6.2
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/S15.2.4_A1_T1.js
 * @description Checking if obtaining Object.prototype.prototype fails
 */

// CHECK#1
if (Object.prototype.prototype !== undefined) {
  $ERROR('#1: Object prototype has not prototype');
}

