// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of push has the attribute ReadOnly
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.7_Array_prototype_push/S15.4.4.7_A6.3.js
 * @description Checking if varying the length property fails
 * @strictOnly
 * @negative
 */

//CHECK#1
var x = Array.prototype.push.length;
Array.prototype.push.length = Infinity;
if (Array.prototype.push.length !== x) {
  $ERROR('#1: x = Array.prototype.push.length; Array.prototype.push.length = Infinity; Array.prototype.push.length === x. Actual: ' + (Array.prototype.push.length));
}


