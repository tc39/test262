// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.replace (searchValue, replaceValue)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.11_String.prototype.replace/S15.5.4.11_A1_T1.js
 * @description Arguments are true and 1, and instance is object
 */

var __instance = new Object(true);

__instance.replace = String.prototype.replace;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.replace(true, 1) !== "1") {
  $ERROR('#1: __instance = new Object(true); __instance.replace = String.prototype.replace;  __instance.replace(true, 1) === "1". Actual: '+__instance.replace(true, 1) );
}
//
//////////////////////////////////////////////////////////////////////////////

