// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The value of the internal [[Class]] property of Object prototype object is "Object"
 *
 * @section 15.2.4
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/S15.2.4_A2.js
 * @description Getting the value of the internal [[Class]] property with Object.prototype.toString() function
 */

var tostr = Object.prototype.toString();

//CHECK#1
if (tostr !== "[object Object]") {
  $ERROR('#1: the value of the internal [[Class]] property of Object prototype object is "Object"');
}

