// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleLowerCase()
description: Call toLocaleLowerCase() function for RegExp object
---*/

var __reg = new RegExp("ABC");
__reg.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__reg.toLocaleLowerCase() !== "/abc/") {
  $ERROR('#1: var __reg = new RegExp("ABC"); __reg.toLocaleLowerCase = String.prototype.toLocaleLowerCase; __reg.toLocaleLowerCase() === "/abc/". Actual: '+__reg.toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
