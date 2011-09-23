// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of toString has the attribute DontDelete
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.2_Array_prototype_toString/S15.4.4.2_A4.2.js
 * @description Checking use hasOwnProperty, delete
 * @strictOnly
 * @negative
 */

//CHECK#1
if (Array.prototype.toString.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.toString.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.toString.hasOwnProperty('length')));
}

delete Array.prototype.toString.length;

//CHECK#2
if (Array.prototype.toString.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.toString.length; Array.prototype.toString.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.toString.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.toString.length === undefined) {
  $ERROR('#3: delete Array.prototype.toString.length; Array.prototype.toString.length !== undefined');
}



