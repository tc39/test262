// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object.prototype.propertyIsEnumerable has not prototype property
 *
 * @path 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.7_Object.prototype.propertyIsEnumerable/S15.2.4.7_A6.js
 * @description Checking if obtaining the prototype property of Object.prototype.propertyIsEnumerable fails
 */

//CHECK#1
if (Object.prototype.propertyIsEnumerable.prototype !== undefined) {
  $ERROR('#1: Object.prototype.propertyIsEnumerable has not prototype property'+Object.prototype.propertyIsEnumerable.prototype);
}
//

