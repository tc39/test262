// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When String.prototype.charCodeAt(pos) calls if ToInteger(pos) less than 0 the NaN returns
 *
 * @section 15.5.4.5
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.5_String.prototype.charCodeAt/S15.5.4.5_A2.js
 * @description Call charCodeAt(pos) with negative pos
 */

function __FACTORY(){};

__FACTORY.prototype.charCodeAt = String.prototype.charCodeAt;

var __instance = new __FACTORY;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!isNaN(__instance.charCodeAt(-1))) {
  $ERROR('#1: function __FACTORY(){}; __FACTORY.prototype.charCodeAt = String.prototype.charCodeAt; __instance = new __FACTORY; isNaN(__instance.charCodeAt(-1)) return true. Actual: '+isNaN(__instance.charCodeAt(-1)));
}
//
//////////////////////////////////////////////////////////////////////////////

