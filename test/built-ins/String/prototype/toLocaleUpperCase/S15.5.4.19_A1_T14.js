// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T14
description: Call toLocaleUpperCase() function for RegExp object
---*/

var __reg = new RegExp("abc");
__reg.toLocaleUpperCase = String.prototype.toLocaleUpperCase;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(__reg.toLocaleUpperCase(), "/ABC/", '#1: var __reg = new RegExp("abc"); __reg.toLocaleUpperCase = String.prototype.toLocaleUpperCase; __reg.toLocaleUpperCase() === "/ABC/"');
//
//////////////////////////////////////////////////////////////////////////////
