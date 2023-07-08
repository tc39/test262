// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T14
description: Call toUpperCase() function of RegExp object
---*/

var __reg = new RegExp("abc");
__reg.toUpperCase = String.prototype.toUpperCase;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(__reg.toUpperCase(), "/ABC/", '#1: var __reg = new RegExp("abc"); __reg.toUpperCase = String.prototype.toUpperCase; __reg.toUpperCase() === "/ABC/"');
//
//////////////////////////////////////////////////////////////////////////////
