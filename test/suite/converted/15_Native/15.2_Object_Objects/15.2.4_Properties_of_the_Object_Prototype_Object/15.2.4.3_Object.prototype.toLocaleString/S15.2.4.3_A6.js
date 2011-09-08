// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object.prototype.toLocaleString has not prototype property
 *
 * @section: 15.2.4.3, 13.2;
 * @path: 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.3_Object.prototype.toLocaleString/S15.2.4.3_A6.js;
 * @description: Checking if obtaining the prototype property of Object.prototype.toLocaleString fails;
 */

//CHECK#1
if (Object.prototype.toLocaleString.prototype !== undefined) {
  $ERROR('#1: Object.prototype.toLocaleString has not prototype property'+Object.prototype.toLocaleString.prototype);
}
//

