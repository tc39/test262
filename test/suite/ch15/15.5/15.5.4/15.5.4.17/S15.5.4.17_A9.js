// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The String.prototype.toLocaleLowerCase.length property has the attribute
    DontDelete
description: >
    Checking if deleting the String.prototype.toLocaleLowerCase.length
    property fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.toLocaleLowerCase.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.toLocaleLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLocaleLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.toLocaleLowerCase.length) {
  $ERROR('#1: delete String.prototype.toLocaleLowerCase.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.toLocaleLowerCase.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.toLocaleLowerCase.length; String.prototype.toLocaleLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLocaleLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////
