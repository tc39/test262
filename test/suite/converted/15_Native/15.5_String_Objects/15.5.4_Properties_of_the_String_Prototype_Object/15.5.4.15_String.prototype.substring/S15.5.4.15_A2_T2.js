// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.substring (start, end) returns a string value(not object)
 *
 * @section 15.5.4.15
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A2_T2.js
 * @description start is NaN, end is Infinity
 */

var __string = new String('this is a string object');

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.substring(NaN, Infinity) !== "this is a string object") {
  $ERROR('#1: __string = new String(\'this is a string object\'); __string.substring(NaN, Infinity) === "this is a string object". Actual: '+__string.substring(NaN, Infinity) );
}
//
//////////////////////////////////////////////////////////////////////////////

