// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getTime" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.getTime  === false) {
  $ERROR('#1: The Date.prototype.getTime property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getTime')) {
  $FAIL('#2: The Date.prototype.getTime property has not the attributes DontDelete');
}
