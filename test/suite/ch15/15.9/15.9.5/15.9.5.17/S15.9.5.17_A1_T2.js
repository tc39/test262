// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getUTCDay" has { DontEnum } attributes
es5id: 15.9.5.17_A1_T2
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.getUTCDay  === false) {
  $ERROR('#1: The Date.prototype.getUTCDay property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getUTCDay')) {
  $FAIL('#2: The Date.prototype.getUTCDay property has not the attributes DontDelete');
}
