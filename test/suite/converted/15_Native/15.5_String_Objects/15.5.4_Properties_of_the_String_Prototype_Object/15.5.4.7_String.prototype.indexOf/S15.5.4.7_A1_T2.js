// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.indexOf(searchString, position)
 *
 * @section: 15.5.4.7;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A1_T2.js;
 * @description: Arguments are boolean equation, function and null, and instance is Boolean object;
 */

var __instance = new Boolean;

__instance.indexOf = String.prototype.indexOf;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.indexOf("A"!=="\u0041", function(){return 0;}(),null) !== 0) {
  $ERROR('#1: __instance = new Boolean; __instance.indexOf = String.prototype.indexOf;  __instance.indexOf("A"!=="\\u0041", function(){return 0;}(),null) === 0. Actual: '+__instance.indexOf("A"!=="\u0041", function(){return 0;}(),null) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

