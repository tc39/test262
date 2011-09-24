// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of slice has the attribute ReadOnly
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.10_Array_prototype_slice/S15.4.4.10_A5.3.js
 * @description Checking if varying the length property fails
 * @onlyStrict
 * @negative
 */

//CHECK#1
var x = Array.prototype.slice.length;
Array.prototype.slice.length = Infinity;
if (Array.prototype.slice.length !== x) {
  $ERROR('#1: x = Array.prototype.slice.length; Array.prototype.slice.length = Infinity; Array.prototypeslice.length === x. Actual: ' + (Array.prototypeslice.length));
}


