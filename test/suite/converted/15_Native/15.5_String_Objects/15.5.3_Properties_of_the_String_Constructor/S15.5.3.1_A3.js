// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype property has the attribute DontDelete
 *
 * @section 15.5.3.1, 15.5.4
 * @path 15_Native/15.5_String_Objects/15.5.3_Properties_of_the_String_Constructor/S15.5.3.1_A3.js
 * @description Checking if deleting the String.prototype property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.hasOwnProperty('prototype'))) {
  $FAIL('#1: String.hasOwnProperty(\'prototype\') return true. Actual: '+String.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////

delete String.prototype;

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.hasOwnProperty('prototype'))) {
  $ERROR('#2: delete String.prototype; String.hasOwnProperty(\'prototype\') return true. Actual: '+String.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////

