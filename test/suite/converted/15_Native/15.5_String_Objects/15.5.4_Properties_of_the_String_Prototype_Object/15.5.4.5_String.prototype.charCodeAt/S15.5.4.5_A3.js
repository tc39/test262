// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When String.prototype.charCodeAt(pos) calls if ToInteger(pos) not less than ToString(this value) the NaN returns
 *
 * @section: 15.5.4.5;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.5_String.prototype.charCodeAt/S15.5.4.5_A3.js;
 * @description: pos is bigger of string length;
 */

var __instance = new String("ABC");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!isNaN(__instance.charCodeAt(3))) {
  $ERROR('#1: __instance = new String("ABC"); isNaN(__instance.charCodeAt(3)) return true. Actual: '+isNaN(__instance.charCodeAt(3)));
}
//
//////////////////////////////////////////////////////////////////////////////

