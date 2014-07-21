// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String.prototype.split.length property has the attribute DontDelete
description: >
    Checking if deleting the String.prototype.split.length property
    fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.split.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.split.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.split.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.split.length) {
  $ERROR('#1: delete String.prototype.split.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.split.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.split.length; String.prototype.split.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.split.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////
