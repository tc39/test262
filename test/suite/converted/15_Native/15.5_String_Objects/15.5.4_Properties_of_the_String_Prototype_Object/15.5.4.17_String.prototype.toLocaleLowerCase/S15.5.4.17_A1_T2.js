// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleLowerCase()
 *
 * @id: S15.5.4.17_A1_T2;
 * @section: 15.5.4.17;
 * @description: Instance is Boolean object;
 */

var __instance = new Boolean;

__instance.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toLocaleLowerCase() !== "false") {
  $ERROR('#1: __instance = new Boolean; __instance.toLocaleLowerCase = String.prototype.toLocaleLowerCase;  __instance.toLocaleLowerCase() === "false". Actual: '+__instance.toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

