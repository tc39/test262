// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of splice is 2
 *
 * @section: 15.4.4.12;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.12_Array_prototype_splice/S15.4.4.12_A5.4.js;
 * @description: splice.length === 1;
 */

//CHECK#1
if (Array.prototype.splice.length !== 2) {
  $ERROR('#1: Array.prototype.splice.length === 2. Actual: ' + (Array.prototype.splice.length));
}


