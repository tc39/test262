// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.indexOf(searchString, position)
description: >
    Call indexOf(searchString, position) function with null argument
    of function object
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" indexOf(null) evaluates to indexOf("",0)
if (function(){return "gnulluna"}().indexOf(null) !== 1) {
  $ERROR('#1: function(){return "gnulluna"}().indexOf(null) === 1. Actual: '+function(){return "gnulluna"}().indexOf(null) ); 
}
//
//////////////////////////////////////////////////////////////////////////////
