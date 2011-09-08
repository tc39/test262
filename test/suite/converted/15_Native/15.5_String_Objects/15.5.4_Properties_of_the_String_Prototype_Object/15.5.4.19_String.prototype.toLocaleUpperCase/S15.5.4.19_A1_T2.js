// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleUpperCase()
 *
 * @section: 15.5.4.19;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.19_String.prototype.toLocaleUpperCase/S15.5.4.19_A1_T2.js;
 * @description: Instance is Boolean object;
 */

var __instance = new Boolean;

__instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toLocaleUpperCase() !== "FALSE") {
  $ERROR('#1: __instance = new Boolean; __instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;  __instance.toLocaleUpperCase() === "FALSE". Actual: '+__instance.toLocaleUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

