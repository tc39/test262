// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.lastIndexOf(searchString, position)
 *
 * @section: 15.5.4.8;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.8_String.prototype.lastIndexOf/S15.5.4.8_A1_T4.js;
 * @description: Call lastIndexOf(searchString, position) function without arguments of string;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString() evaluates to "" lastIndexOf() evaluates to lastIndexOf("",0)
if ("".lastIndexOf() !== -1) {
  $ERROR('#1: "".lastIndexOf() === -1. Actual: '+("".lastIndexOf()) );
}
//
//////////////////////////////////////////////////////////////////////////////

