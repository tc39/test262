// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The initial value of Function.prototype.constructor is the built-in Function constructor
 *
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/S15.3.4.1_A1_T1.js
 * @description Checking Function.prototype.constructor
 */

//CHECK#1
if (Function.prototype.constructor !== Function) {
  $ERROR('#1: The initial value of Function.prototype.constructor is the built-in Function constructor');
}

