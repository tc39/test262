// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleUpperCase()
description: Instance is Boolean object
---*/

var __instance = new Boolean;

__instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toLocaleUpperCase() !== "FALSE") {
  $ERROR('#1: __instance = new Boolean; __instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;  __instance.toLocaleUpperCase() === "FALSE". Actual: '+__instance.toLocaleUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
