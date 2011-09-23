// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.2_Object.prototype.toString/S15.2.4.2_A13.js
 * @description If the this value is null, return "[object Null]".
 */

if (Object.prototype.toString.call(null) !== "[object Null]") {
  $ERROR('If the this value is null, return "[object Null]".');
}

