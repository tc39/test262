// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.valueOf() returns this string value
 *
 * @section 15.5.4.3
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/S15.5.4.3_A1_T3.js
 * @description Create String object as new String(string) and check it`s valueOf()
 */

var __string__obj = new String("metal");

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__string__obj.valueOf() !== "metal") {
  $ERROR('#1: __string__obj = new String("metal"); __string__obj.valueOf() === "metal". Actual: __string__obj.valueOf() ==='+__string__obj.valueOf() ); 
}
//
//////////////////////////////////////////////////////////////////////////////

