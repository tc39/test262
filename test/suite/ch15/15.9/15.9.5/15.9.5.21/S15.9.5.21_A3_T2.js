// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getUTCMinutes property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
description: Checking DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.getUTCMinutes.length  !== false) {
  $ERROR('#1: The Date.prototype.getUTCMinutes.length property has the attributes DontDelete');
}

if (!Date.prototype.getUTCMinutes.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.getUTCMinutes.length property has the attributes DontDelete');
}
