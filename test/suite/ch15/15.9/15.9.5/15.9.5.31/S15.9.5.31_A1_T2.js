// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setUTCSeconds" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.setUTCSeconds  === false) {
  $ERROR('#1: The Date.prototype.setUTCSeconds property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setUTCSeconds')) {
  $FAIL('#2: The Date.prototype.setUTCSeconds property has not the attributes DontDelete');
}
