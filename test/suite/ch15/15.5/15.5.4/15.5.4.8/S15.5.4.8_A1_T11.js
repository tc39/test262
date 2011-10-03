// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.lastIndexOf(searchString, position)
 *
 * @path ch15/15.5/15.5.4/15.5.4.8/S15.5.4.8_A1_T11.js
 * @description Instance is Date(0) object
 */

var __instance = new Date(100000000);

__instance.lastIndexOf = String.prototype.lastIndexOf;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((__instance.lastIndexOf('1970')) !== 11) {
  $ERROR('#1: __instance = new Date(0); __instance.lastIndexOf = String.prototype.lastIndexOf;  __instance.lastIndexOf(\'1970\') === 11. Actual: '+(__instance.lastIndexOf('1970')) );
}
//
//////////////////////////////////////////////////////////////////////////////

