// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype property "getUTCMilliseconds" has { DontEnum }
    attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.getUTCMilliseconds  === false) {
  $ERROR('#1: The Date.prototype.getUTCMilliseconds property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getUTCMilliseconds')) {
  $FAIL('#2: The Date.prototype.getUTCMilliseconds property has not the attributes DontDelete');
}
