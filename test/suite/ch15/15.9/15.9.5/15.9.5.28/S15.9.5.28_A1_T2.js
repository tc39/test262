// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setMilliseconds" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.setMilliseconds  === false) {
  $ERROR('#1: The Date.prototype.setMilliseconds property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setMilliseconds')) {
  $FAIL('#2: The Date.prototype.setMilliseconds property has not the attributes DontDelete');
}
