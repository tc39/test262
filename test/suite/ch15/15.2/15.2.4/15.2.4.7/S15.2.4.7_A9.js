// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Object.prototype.propertyIsEnumerable.length property has the
    attribute DontDelete
description: >
    Checking if deleting the
    Object.prototype.propertyIsEnumerable.length property fails
includes: [$FAIL.js]
---*/

//CHECK#0
if (!(Object.prototype.propertyIsEnumerable.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.propertyIsEnumerable has length property');
}

//CHECK#1
if (delete Object.prototype.propertyIsEnumerable.length) {
  $ERROR('#1: The Object.prototype.propertyIsEnumerable.length property has the attributes DontDelete');
}
//
