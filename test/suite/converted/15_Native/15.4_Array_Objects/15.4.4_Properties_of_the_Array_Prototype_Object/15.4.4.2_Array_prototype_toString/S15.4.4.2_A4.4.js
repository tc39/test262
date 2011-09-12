// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of toString is 0
 *
 * @section 15.4.4.2
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.2_Array_prototype_toString/S15.4.4.2_A4.4.js
 * @description toString.length === 1
 */

//CHECK#1
if (Array.prototype.toString.length !== 0) {
  $ERROR('#1: Array.prototype.toString.length === 0. Actual: ' + (Array.prototype.toString.length));
}


