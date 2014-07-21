// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Function.prototype.call.length property has the attribute DontDelete
description: >
    Checking if deleting the Function.prototype.call.length property
    fails
includes: [$FAIL.js]
---*/

//CHECK#0
if (!(Function.prototype.call.hasOwnProperty('length'))) {
  $FAIL('#0: the Function.prototype.call has length property');
}

//CHECK#1
if (delete Function.prototype.call.length) {
  $ERROR('#1: The Function.prototype.call.length property has the attributes DontDelete');
}

//CHECK#2
if (!(Function.prototype.call.hasOwnProperty('length'))) {
  $FAIL('#2: The Function.prototype.call.length property has the attributes DontDelete');
}
