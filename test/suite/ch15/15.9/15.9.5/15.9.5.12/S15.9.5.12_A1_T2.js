// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getMonth" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.getMonth  === false) {
  $ERROR('#1: The Date.prototype.getMonth property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getMonth')) {
  $FAIL('#2: The Date.prototype.getMonth property has not the attributes DontDelete');
}
