// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of push has the attribute DontDelete
 *
 * @section 15.4.4.7, 15.2.4.5, 11.4.1
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.7_Array_prototype_push/S15.4.4.7_A6.2.js
 * @description Checking use hasOwnProperty, delete
 * @strict_only
 * @negative
 */

//CHECK#1
if (Array.prototype.push.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.push.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.push.hasOwnProperty('length')));
}

delete Array.prototype.push.length;

//CHECK#2
if (Array.prototype.push.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.push.length; Array.prototype.push.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.push.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.push.length === undefined) {
  $ERROR('#3: delete Array.prototype.push.length; Array.prototype.push.length !== undefined');
}



