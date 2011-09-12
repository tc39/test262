// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.lastIndexOf(searchString, position)
 *
 * @section 15.5.4.8
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.8_String.prototype.lastIndexOf/S15.5.4.8_A1_T1.js
 * @description Arguments are false and true, and instance is object
 */

var __instance = new Object(true);

__instance.lastIndexOf = String.prototype.lastIndexOf;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.lastIndexOf(true, false) !== 0) {
  $ERROR('#1: __instance = new Object(true); __instance.lastIndexOf = String.prototype.lastIndexOf;  __instance.lastIndexOf(true, false) === 0. Actual: '+__instance.lastIndexOf(true, false) );
}
//
//////////////////////////////////////////////////////////////////////////////

