// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Error has property prototype
 *
 * @section 15.11.3.1, 16
 * @path 15_Native/15.11_Error_Objects/15.11.3_Properties_of_the_Error_Constructor/S15.11.3.1_A4_T1.js
 * @description Checking Error.hasOwnProperty('prototype')
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(Error.hasOwnProperty('prototype'))) {
  $ERROR('#1: Error.hasOwnProperty(\'prototype\') return true. Actual: '+Error.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////

