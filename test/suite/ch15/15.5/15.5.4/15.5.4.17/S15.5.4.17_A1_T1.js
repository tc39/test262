// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleLowerCase()
description: Arguments is true, and instance is object
---*/

var __instance = new Object(true);

__instance.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toLocaleLowerCase() !== "true") {
  $ERROR('#1: __instance = new Object(true); __instance.toLocaleLowerCase = String.prototype.toLocaleLowerCase;  __instance.toLocaleLowerCase() === "true". Actual: '+__instance.toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
