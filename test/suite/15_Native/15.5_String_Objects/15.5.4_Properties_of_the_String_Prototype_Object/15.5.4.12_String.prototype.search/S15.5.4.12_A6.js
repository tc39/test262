// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.search has not prototype property
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.12_String.prototype.search/S15.5.4.12_A6.js
 * @description Checking String.prototype.search.prototype
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.search.prototype !== undefined) {
  $ERROR('#1: String.prototype.search.prototype === undefined. Actual: '+String.prototype.search.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////

