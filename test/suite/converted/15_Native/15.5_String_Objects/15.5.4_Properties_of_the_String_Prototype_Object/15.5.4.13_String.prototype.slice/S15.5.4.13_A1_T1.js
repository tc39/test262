// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @section: 15.5.4.13;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T1.js;
 * @description: Arguments are false and true, and instance is object;
 */

var __instance = new Object(true);

__instance.slice = String.prototype.slice;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.slice(false, true) !== "t") {
  $ERROR('#1: __instance = new Object(true); __instance.slice = String.prototype.slice;  __instance.slice(false, true) === "t". Actual: '+__instance.slice(false, true) );
}
//
//////////////////////////////////////////////////////////////////////////////

