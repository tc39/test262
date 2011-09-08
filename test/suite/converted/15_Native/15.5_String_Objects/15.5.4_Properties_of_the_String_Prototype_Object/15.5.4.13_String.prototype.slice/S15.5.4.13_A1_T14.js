// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @section: 15.5.4.13;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T14.js;
 * @description: Used one argument, that is function(){}(). Instance is string;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("report".slice(function(){}()) !== "report") {
  $ERROR('#1: "report".slice(function(){}()) === "report". Actual: '+"report".slice(function(){}()) );
}
//
//////////////////////////////////////////////////////////////////////////////

