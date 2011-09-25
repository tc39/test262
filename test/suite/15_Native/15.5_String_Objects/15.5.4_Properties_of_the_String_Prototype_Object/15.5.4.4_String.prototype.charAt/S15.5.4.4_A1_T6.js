// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.charAt(pos)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.4_String.prototype.charAt/S15.5.4.4_A1_T6.js
 * @description Call charAt() function with x argument of new String object, where x is undefined variable
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToInteger(undefined) evaluates to 0 charAt() evaluates to charAt(0)
if (new String("lego").charAt(x) !== "l") {
  $ERROR('#1: var x; new String("lego").charAt(x) === "l". Actual: new String("lego").charAt(x) ==='+new String("lego").charAt(x) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

