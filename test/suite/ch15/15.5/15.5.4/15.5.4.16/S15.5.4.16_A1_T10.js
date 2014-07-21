// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLowerCase()
description: >
    Call toLowerCase() function of object with overrode toString
    function
---*/

var __obj = {toString:function(){return "\u0041B";}}
__obj.toLowerCase = String.prototype.toLowerCase;


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.toLowerCase() !=="ab") {
  $ERROR('#1: var __obj = {toString:function(){return "\u0041B";}}; __obj.toLowerCase = String.prototype.toLowerCase; __obj.toLowerCase() ==="ab". Actual: '+__obj.toLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
