// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String.prototype.replace.length property has the attribute ReadOnly
es5id: 15.5.4.11_A10
description: >
    Checking if varying the String.prototype.replace.length property
    fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.replace.hasOwnProperty('length'))) {
  $FAIL('#1: String.prototype.replace.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.replace.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype.replace.length;

String.prototype.replace.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.replace.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.replace.length; String.prototype.replace.length = function(){return "shifted";}; String.prototype.replace.length === __obj. Actual: '+String.prototype.replace.length );
}
//
//////////////////////////////////////////////////////////////////////////////
