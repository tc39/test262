// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.replace (searchValue, replaceValue)
description: Arguments are true and 1, and instance is object
---*/

var __instance = new Object(true);

__instance.replace = String.prototype.replace;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.replace(true, 1) !== "1") {
  $ERROR('#1: __instance = new Object(true); __instance.replace = String.prototype.replace;  __instance.replace(true, 1) === "1". Actual: '+__instance.replace(true, 1) );
}
//
//////////////////////////////////////////////////////////////////////////////
