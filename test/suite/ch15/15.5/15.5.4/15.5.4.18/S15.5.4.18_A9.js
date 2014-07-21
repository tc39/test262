// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The String.prototype.toUpperCase.length property has the attribute
    DontDelete
description: >
    Checking if deleting the String.prototype.toUpperCase.length
    property fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.toUpperCase.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.toUpperCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toUpperCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.toUpperCase.length) {
  $ERROR('#1: delete String.prototype.toUpperCase.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.toUpperCase.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.toUpperCase.length; String.prototype.toUpperCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toUpperCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////
