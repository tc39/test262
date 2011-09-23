// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.split has not prototype property
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.14_String.prototype.split/S15.5.4.14_A6.js
 * @description Checking String.prototype.split.prototype
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.split.prototype !== undefined) {
  $ERROR('#1: String.prototype.split.prototype === undefined. Actual: '+String.prototype.split.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////

