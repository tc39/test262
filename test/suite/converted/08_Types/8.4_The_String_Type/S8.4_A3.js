// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String type has a length property
 *
 * @section: 8.4;
 * @path: 08_Types/8.4_The_String_Type/S8.4_A3.js;
 * @description: Try read length property of string variable;
 */

var __str = "ABCDEFGH";
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.length !== 8) {
  $ERROR('#1: var __str = "ABCDEFGH"; __str.length === 8. Actual: ' + (__str.length));
}
//
//////////////////////////////////////////////////////////////////////////////

