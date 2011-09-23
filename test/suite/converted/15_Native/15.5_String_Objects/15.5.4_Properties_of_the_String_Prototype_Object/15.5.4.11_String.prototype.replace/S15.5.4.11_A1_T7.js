// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.replace (searchValue, replaceValue)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.11_String.prototype.replace/S15.5.4.11_A1_T7.js
 * @description Call replace (searchValue, replaceValue) function with string and undefined arguments of String object
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String(void 0).replace("e",undefined) !== "undundefinedfined") {
  $ERROR('#1: String(void 0).replace("e",undefined) === "undundefinedfined". Actual: '+String(void 0).replace("e",undefined) );
}
//
//////////////////////////////////////////////////////////////////////////////

