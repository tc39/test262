// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The initial value of Object.prototype.constructor is the built-in Object constructor
 *
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/S15.2.4.1_A1_T1.js
 * @description Checking the Object.prototype.constructor
 */

//CHECK#1
if (Object.prototype.constructor !== Object) {
  $ERROR('#1: The initial value of Object.prototype.constructor is the built-in Object constructor');
}

