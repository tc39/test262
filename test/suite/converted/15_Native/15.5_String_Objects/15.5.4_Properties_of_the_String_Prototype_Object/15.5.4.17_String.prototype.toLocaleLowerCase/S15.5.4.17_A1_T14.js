// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleLowerCase()
 *
 * @section 15.5.4.17
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.17_String.prototype.toLocaleLowerCase/S15.5.4.17_A1_T14.js
 * @description Call toLocaleLowerCase() function for RegExp object
 */

var __reg = new RegExp("ABC");
__reg.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__reg.toLocaleLowerCase() !== "/abc/") {
  $ERROR('#1: var __reg = new RegExp("ABC"); __reg.toLocaleLowerCase = String.prototype.toLocaleLowerCase; __reg.toLocaleLowerCase() === "/abc/". Actual: '+__reg.toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

