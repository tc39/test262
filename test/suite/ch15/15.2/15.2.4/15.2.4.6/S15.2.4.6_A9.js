// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Object.prototype.isPrototypeOf.length property has the attribute
    DontDelete
description: >
    Checking deleting the Object.prototype.isPrototypeOf.length
    property fails
includes: [$FAIL.js]
---*/

//CHECK#0
if (!(Object.prototype.isPrototypeOf.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.isPrototypeOf has length property');
}

//CHECK#1
if (delete Object.prototype.isPrototypeOf.length) {
  $ERROR('#1: The Object.prototype.isPrototypeOf.length property has the attributes DontDelete');
}
//
