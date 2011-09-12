// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.charAt(pos)
 *
 * @section 15.5.4.4
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.4_String.prototype.charAt/S15.5.4.4_A1_T3.js
 * @description Use numbers and strings as pos
 */

var charAt = String.prototype.charAt;

if (typeof toString === "undefined"){
    var toString = Object.prototype.toString;
}

var __class__ = toString();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (charAt("1") + charAt(2) + charAt("3") + charAt(4) + charAt("5") + charAt(6) !== "object") {
  $ERROR('#1: charAt = String.prototype.charAt; charAt("1") + charAt(2) + charAt("3") + charAt(4) + charAt("5") + charAt(6) === "object". Actual: '+charAt("1") + charAt(2) + charAt("3") + charAt(4) + charAt("5") + charAt(6) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

