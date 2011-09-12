// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.charAt(pos)
 *
 * @section 15.5.4.4
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.4_String.prototype.charAt/S15.5.4.4_A1_T10.js
 * @description Call charAt() function with object argument
 */

var __obj = {toString:function(){return 1;}}
var __str = "lego";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
  if (charAt(__obj) !== "e") {
    $ERROR('#1: var __obj = {toString:function(){return 1;}}; var __str = "lego"; charAt(__obj) === "e". Actual: charAt(__obj) ==='+charAt(__obj) ); 
  }
}
//
//////////////////////////////////////////////////////////////////////////////

