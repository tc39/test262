// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.fromCharCode () returns empty string
 *
 * @path 15_Native/15.5_String_Objects/15.5.3_Properties_of_the_String_Constructor/S15.5.3.2_A2.js
 * @description Call String.fromCharCode()
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.fromCharCode() !== "") {
  $ERROR('#1: String.fromCharCode () returns empty string. Actual: '+String.fromCharCode());
}
//
//////////////////////////////////////////////////////////////////////////////


