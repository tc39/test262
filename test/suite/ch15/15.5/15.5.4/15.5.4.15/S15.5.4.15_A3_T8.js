// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    String.prototype.substring (start, end) can be applied to non String object instance and
    returns a string value(not object)
description: >
    Apply String.prototype.substring to Number instance. Start is
    Infinity, end is NaN
---*/

var __instance = new Number(NaN);
 
__instance.substring = String.prototype.substring;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.substring(Infinity, NaN) !== "NaN") {
  $ERROR('#1: __instance = new Number(NaN); __instance.substring = String.prototype.substring;  __instance.substring(Infinity, NaN) === "NaN". Actual: '+__instance.substring(Infinity, NaN) );
}
//
//////////////////////////////////////////////////////////////////////////////
