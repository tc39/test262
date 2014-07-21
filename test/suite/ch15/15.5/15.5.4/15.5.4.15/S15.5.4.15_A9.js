// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The String.prototype.substring.length property has the attribute
    DontDelete
description: >
    Checking if deleting the String.prototype.substring.length
    property fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.substring.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.substring.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.substring.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.substring.length) {
  $ERROR('#1: delete String.prototype.substring.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.substring.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.substring.length; String.prototype.substring.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.substring.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////
