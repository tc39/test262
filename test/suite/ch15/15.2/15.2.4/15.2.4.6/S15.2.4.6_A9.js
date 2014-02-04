// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Object.prototype.isPrototypeOf.length property does not have the
    attribute DontDelete
es5id: 15.2.4.6_A9
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
if (!delete Object.prototype.isPrototypeOf.length) {
  $ERROR('#1: The Object.prototype.isPrototypeOf.length property does not have the attributes DontDelete');
}
//
