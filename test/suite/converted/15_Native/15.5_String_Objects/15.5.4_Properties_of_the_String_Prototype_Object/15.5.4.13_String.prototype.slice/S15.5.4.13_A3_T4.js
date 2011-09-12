// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end) can be applied to object instances
 *
 * @section 15.5.4.13
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A3_T4.js
 * @description Checknig if applying String.prototype.slice to Function object instance passes
 */

__FACTORY.prototype.toString = function() { return this.value+''; };

var __instance = new __FACTORY(void 0);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.slice(0,100) !== "undefined") {
  $ERROR('#1: __instance.slice(0,100) === "undefined". Actual: '+__instance.slice(0,100) );
}
//
//////////////////////////////////////////////////////////////////////////////

function __FACTORY( value ) {
    this.value = value,
    this.slice= String.prototype.slice;
    //this.substring = String.prototype.substring;
}

