// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of toLocaleString has the attribute DontDelete
 *
 * @section: 15.4.4.3, 15.2.4.5, 11.4.1;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.3_Array_prototype_toLocaleString/S15.4.4.3_A4.2.js;
 * @description: Checking use hasOwnProperty, delete;
 */

//CHECK#1
if (Array.prototype.toLocaleString.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.toLocaleString.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.toLocaleString.hasOwnProperty('length')));
}

delete Array.prototype.toLocaleString.length;

//CHECK#2
if (Array.prototype.toLocaleString.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.toLocaleString.length; Array.prototype.toLocaleString.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.toLocaleString.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.toLocaleString.length === undefined) {
  $ERROR('#3: delete Array.prototype.toLocaleString.length; Array.prototype.toLocaleString.length !== undefined');
}



