// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String.prototype.search.length property has the attribute DontDelete
description: >
    Checking if deleting the String.prototype.search.length property
    fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.search.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.search.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.search.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.search.length) {
  $ERROR('#1: delete String.prototype.search.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.search.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.search.length; String.prototype.search.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.search.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////
