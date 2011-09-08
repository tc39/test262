// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @section: 15.5.4.13;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T7.js;
 * @description: Arguments are symbol and undefined, and instance is String;
 */

//since ToInteger("e") yelds 0
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String(void 0).slice("e",undefined) !== "undefined") {
  $ERROR('#1: String(void 0).slice("e",undefined) === "undefined". Actual: '+String(void 0).slice("e",undefined) );
}
//
//////////////////////////////////////////////////////////////////////////////

