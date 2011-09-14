// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of shift has the attribute ReadOnly
 *
 * @section 15.4.4.9
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.9_Array_prototype_shift/S15.4.4.9_A5.3.js
 * @description Checking if varying the length property fails
 * @strict_only
 * @negative
 */

//CHECK#1
var x = Array.prototype.shift.length;
Array.prototype.shift.length = Infinity;
if (Array.prototype.shift.length !== x) {
  $ERROR('#1: x = Array.prototype.shift.length; Array.prototype.shift.length = Infinity; Array.prototype.shift.length === x. Actual: ' + (Array.prototype.shift.length));
}


