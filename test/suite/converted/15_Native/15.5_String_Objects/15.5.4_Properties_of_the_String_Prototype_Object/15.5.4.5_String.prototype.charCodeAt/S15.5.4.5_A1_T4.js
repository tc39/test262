// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.charCodeAt(pos)
 *
 * @section: 15.5.4.5;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.5_String.prototype.charCodeAt/S15.5.4.5_A1_T4.js;
 * @description: Call charCodeAt() function without argument of string object;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since Number() evaluates to 0 charCodeAt() evaluates to charCodeAt(0)
if ("smart".charCodeAt() !== 0x73) {
  $ERROR('#1: "smart".charCodeAt() === 0x73. Actual: "smart".charCodeAt() ==='+("smart".charCodeAt()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

