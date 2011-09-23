// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLowerCase has not prototype property
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.16_String.prototype.toLowerCase/S15.5.4.16_A6.js
 * @description Checking String.prototype.toLowerCase.prototype
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.toLowerCase.prototype !== undefined) {
  $ERROR('#1: String.prototype.toLowerCase.prototype === undefined. Actual: '+String.prototype.toLowerCase.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////

