// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.slice (start, end)
description: Used one argument, that is function(){}(). Instance is string
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("report".slice(function(){}()) !== "report") {
  $ERROR('#1: "report".slice(function(){}()) === "report". Actual: '+"report".slice(function(){}()) );
}
//
//////////////////////////////////////////////////////////////////////////////
