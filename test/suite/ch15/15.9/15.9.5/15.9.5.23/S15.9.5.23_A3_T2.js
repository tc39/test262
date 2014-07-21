// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getUTCSeconds property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
description: Checking DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.getUTCSeconds.length  !== false) {
  $ERROR('#1: The Date.prototype.getUTCSeconds.length property has the attributes DontDelete');
}

if (!Date.prototype.getUTCSeconds.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.getUTCSeconds.length property has the attributes DontDelete');
}
