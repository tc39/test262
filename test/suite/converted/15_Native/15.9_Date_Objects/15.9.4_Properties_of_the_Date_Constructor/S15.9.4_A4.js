// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The value of the internal [[Prototype]] property of the Date
 * constructor is the Function prototype object
 *
 * @section 15.9.4
 * @path 15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/S15.9.4_A4.js
 * @description Checking Function.prototype.isPrototypeOf(Date)
 */

//CHECK#1
if (!(Function.prototype.isPrototypeOf(Date))) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Date constructor is the Function prototype object.');
}

