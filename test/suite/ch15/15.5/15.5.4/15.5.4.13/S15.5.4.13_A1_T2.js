// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.slice (start, end)
description: >
    Arguments are function call and x, and instance is Boolean. x is
    undefined variable
---*/

var __instance = new Boolean;

__instance.slice = String.prototype.slice;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.slice(function(){return true;}(),x) !== "alse") {
  $ERROR('#1: var x; __instance = new Boolean; __instance.slice = String.prototype.slice;  __instance.slice(function(){return true;}(),x) === "alse". Actual: '+__instance.slice(function(){return true;}(),x) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;
