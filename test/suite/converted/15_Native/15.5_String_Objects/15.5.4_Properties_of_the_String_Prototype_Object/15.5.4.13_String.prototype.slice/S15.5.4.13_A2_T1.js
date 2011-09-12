// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end) returns a string value(not object)
 *
 * @section 15.5.4.13
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A2_T1.js
 * @description Checking type of slice()
 */

var __string = new String("this is a string object");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __string.slice() !== "string") {
  $ERROR('#1: __string = new String("this is a string object"); typeof __string.slice() === "string". Actual: '+typeof __string.slice() );
}
//
//////////////////////////////////////////////////////////////////////////////

