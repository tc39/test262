// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.substring has not prototype property
 *
 * @section 15.5.4.15, 13.2
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A6.js
 * @description Checking String.prototype.substring.prototype
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.substring.prototype !== undefined) {
  $ERROR('#1: String.prototype.substring.prototype === undefined. Actual: '+String.prototype.substring.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////

