// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function.prototype property has the attribute DontDelete
 *
 * @path 15_Native/15.3_Function_Objects/15.3.3_Properties_of_the_Function_Constructor/15.3.3.1_Function.prototype/S15.3.3.1_A3.js
 * @description Checking if deleting the Function.prototype property fails
 */

delete Function.prototype;

//CHECK#1
if (!(Function.hasOwnProperty('prototype'))) {
  $ERROR('#1: the Function.prototype property has the attributes DontDelete.');
}

