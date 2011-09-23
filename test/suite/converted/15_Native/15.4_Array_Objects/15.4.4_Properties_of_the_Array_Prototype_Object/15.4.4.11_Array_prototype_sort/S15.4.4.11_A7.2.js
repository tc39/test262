// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of sort has the attribute DontDelete
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.11_Array_prototype_sort/S15.4.4.11_A7.2.js
 * @description Checking use hasOwnProperty, delete
 * @strictOnly
 * @negative
 */

//CHECK#1
if (Array.prototype.sort.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.sort.prototype.hasOwnProperty(\'length\') === true. Actual: ' + (Array.sort.prototype.hasOwnProperty('length')));
}

delete Array.prototype.sort.length;

//CHECK#2
if (Array.prototype.sort.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.sort.length; Array.prototype.sort.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.sort.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.sort.length === undefined) {
  $ERROR('#3: delete Array.prototype.sort.length; Array.prototype.sort.length !== undefined');
}



