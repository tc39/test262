// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.charAt has not prototype property
 *
 * @section: 15.5.4.4, 13.2;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.4_String.prototype.charAt/S15.5.4.4_A6.js;
 * @description: Checking String.prototype.charAt.prototype;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.charAt.prototype !== undefined) {
  $ERROR('#1: String.prototype.charAt.prototype === undefined. Actual: '+String.prototype.charAt.prototype ); 
}
//
//////////////////////////////////////////////////////////////////////////////

