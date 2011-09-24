// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of join has the attribute ReadOnly
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.5_Array_prototype_join/S15.4.4.5_A6.3.js
 * @description Checking if varying the length property fails
 * @onlyStrict
 * @negative
 */

//CHECK#1
var x = Array.prototype.join.length;
Array.prototype.join.length = Infinity;
if (Array.prototype.join.length !== x) {
  $ERROR('#1: x = Array.prototype.join.length; Array.prototype.join.length = Infinity; Array.prototype.join.length === x. Actual: ' + (Array.prototype.join.length));
}


