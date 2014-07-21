// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.charCodeAt(pos)
description: Call charCodeAt() function with object argument
---*/

var __obj = {toString:function(){return 1;}}
var __str = "lego";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
  if (charCodeAt(__obj) !== 0x65) {
    $ERROR('#1: var __obj = {toString:function(){return 1;}}; var __str = "lego"; charCodeAt(__obj) === 0x65. Actual: charCodeAt(__obj) ==='+charCodeAt(__obj) ); 
  }
}
//
//////////////////////////////////////////////////////////////////////////////
