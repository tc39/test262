// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of pop is 0
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.6_Array_prototype_pop/S15.4.4.6_A5.4.js
 * @description pop.length === 1
 */

//CHECK#1
if (Array.prototype.pop.length !== 0) {
  $ERROR('#1: Array.prototype.pop.length === 0. Actual: ' + (Array.prototype.pop.length));
}


