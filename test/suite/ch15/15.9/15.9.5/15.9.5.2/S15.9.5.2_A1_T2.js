// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "toString" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.toString  === false) {
  $ERROR('#1: The Date.prototype.toString property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('toString')) {
  $FAIL('#2: The Date.prototype.toString property has not the attributes DontDelete');
}
