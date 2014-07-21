// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String.prototype.indexOf.length property has the attribute DontDelete
description: >
    Checking if deleting the String.prototype.indexOf.length property
    fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.indexOf.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.indexOf.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.indexOf.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.indexOf.length) {
  $ERROR('#1: delete String.prototype.indexOf.length raturn false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.indexOf.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.indexOf.length; String.prototype.indexOf.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.indexOf.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////
