// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLowerCase()
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.16_String.prototype.toLowerCase/S15.5.4.16_A1_T1.js
 * @description Arguments is true, and instance is object
 */

var __instance = new Object(true);

__instance.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toLowerCase() !== "true") {
  $ERROR('#1: __instance = new Object(true); __instance.toLowerCase = String.prototype.toLowerCase;  __instance.toLowerCase() === "true". Actual: '+__instance.toLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

