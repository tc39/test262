// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @section 15.2.4.2
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.2_Object.prototype.toString/S15.2.4.2_A12.js
 * @description If the this value is undefined, return "[object Undefined]".
 */

if (Object.prototype.toString.call(undefined) !== "[object Undefined]") {
  $ERROR('If the this value is undefined, return "[object Undefined]".');
}

