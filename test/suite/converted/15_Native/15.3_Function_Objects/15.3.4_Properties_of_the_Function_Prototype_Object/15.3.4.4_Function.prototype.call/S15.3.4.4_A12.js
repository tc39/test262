// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function.prototype.call has not prototype property
 *
 * @section 15.3.4.4, 13.2
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.4_Function.prototype.call/S15.3.4.4_A12.js
 * @description Checking if obtaining the prototype property of Function.prototype.call fails
 */

//CHECK#1
if (Function.prototype.call.prototype !== undefined) {
  $ERROR('#1: Function.prototype.call has not prototype property'+Function.prototype.call.prototype);
}

