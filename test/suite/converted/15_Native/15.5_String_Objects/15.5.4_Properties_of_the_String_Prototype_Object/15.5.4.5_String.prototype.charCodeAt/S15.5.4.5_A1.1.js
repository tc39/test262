// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.charCodeAt() can accept many arguments
 *
 * @section 15.5.4.5, 13.2
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.5_String.prototype.charCodeAt/S15.5.4.5_A1.1.js
 * @description Checking by using eval
 */

function __FACTORY(){this.toString = function(){ return "wizard";};};

__FACTORY.prototype.charCodeAt = String.prototype.charCodeAt;

var __instance = new __FACTORY;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__instance){
   
    if (__instance.charCodeAt(eval("1"),true,null,{})!== 0x69) {
      $ERROR('#1: __instance.charCodeAt(eval("1"),true,null,{})=== 0x69. Actual: __instance.charCodeAt(eval("1"),true,null,{})==='+__instance.charCodeAt(eval("1"),true,null,{})); 
    }
}
//
//////////////////////////////////////////////////////////////////////////////


