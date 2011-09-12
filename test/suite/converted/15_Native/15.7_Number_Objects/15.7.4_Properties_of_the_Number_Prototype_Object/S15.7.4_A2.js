// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The value of the internal [[Prototype]] property of the Number
 * prototype object is the Object prototype object
 *
 * @section 15.7.4
 * @path 15_Native/15.7_Number_Objects/15.7.4_Properties_of_the_Number_Prototype_Object/S15.7.4_A2.js
 * @description Checking Object.prototype.isPrototypeOf(Number.prototype)
 */

//CHECK#1
if (!Object.prototype.isPrototypeOf(Number.prototype)) {
  $ERROR('#1: Object prototype object is the prototype of Number prototype object');
}

