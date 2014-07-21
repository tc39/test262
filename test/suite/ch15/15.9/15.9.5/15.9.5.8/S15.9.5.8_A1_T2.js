// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "valueOf" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.valueOf  === false) {
  $ERROR('#1: The Date.prototype.valueOf property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('valueOf')) {
  $FAIL('#2: The Date.prototype.valueOf property has not the attributes DontDelete');
}
