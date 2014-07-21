// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.valueOf() returns this string value
description: >
    Create String object as new String(function(){}()) and check it`s
    valueOf()
---*/

var __string__obj = new String(function(){}());

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__string__obj.valueOf() !== "undefined") {
  $ERROR('#1: __string__obj = new String(function(){}()); __string__obj.valueOf() === "undefined". Actual: __string__obj.valueOf() ==='+__string__obj.valueOf() ); 
}
//
//////////////////////////////////////////////////////////////////////////////
