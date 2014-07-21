// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "toTimeString" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.toTimeString  === false) {
  $ERROR('#1: The Date.prototype.toTimeString property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('toTimeString')) {
  $FAIL('#2: The Date.prototype.toTimeString property has not the attributes DontDelete');
}
