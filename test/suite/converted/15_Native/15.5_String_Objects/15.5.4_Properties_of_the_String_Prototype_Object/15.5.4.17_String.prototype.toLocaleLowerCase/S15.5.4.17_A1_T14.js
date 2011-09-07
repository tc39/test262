// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleLowerCase()
 *
 * @id: S15.5.4.17_A1_T14;
 * @section: 15.5.4.17;
 * @description: Call toLocaleLowerCase() function for RegExp object;
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

