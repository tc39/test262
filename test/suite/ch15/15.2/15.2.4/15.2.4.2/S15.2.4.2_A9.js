// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Object.prototype.toString.length property has the attribute DontDelete
description: >
    Checknig if deleting of the Object.prototype.toString.length
    property fails
flags: [noStrict]
includes: [$FAIL.js]
---*/

//CHECK#0
if (!(Object.prototype.toString.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.toString has length property');
}

//CHECK#1
if (delete Object.prototype.toString.length) {
  $ERROR('#1: The Object.prototype.toString.length property has the attributes DontDelete');
}

//CHECK#2
if (!(Object.prototype.toString.hasOwnProperty('length'))) {
  $FAIL('#2: The Object.prototype.toString.length property has the attributes DontDelete');
}
