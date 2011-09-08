// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The [[Prototype]] property of the newly constructed object
 * is set to the original Array prototype object, the one that
 * is the initial value of Array.prototype
 *
 * @section: 15.4.2.1, 15.2.4.6;
 * @path: 15_Native/15.4_Array_Objects/15.4.2_The_Array_Constructor/15.4.2.1_new_Array/S15.4.2.1_A1.1_T3.js;
 * @description: Checking use isPrototypeOf;
 */

//CHECK#1
if (Array.prototype.isPrototypeOf(new Array()) !== true) {
  $ERROR('#1: Array.prototype.isPrototypeOf(new Array()) === true. Actual: ' + (Array.prototype.isPrototypeOf(new Array())));
}


