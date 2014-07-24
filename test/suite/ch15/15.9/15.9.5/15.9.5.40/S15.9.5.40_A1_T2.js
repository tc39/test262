// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setFullYear" has { DontEnum } attributes
es5id: 15.9.5.40_A1_T2
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.setFullYear  === false) {
  $ERROR('#1: The Date.prototype.setFullYear property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setFullYear')) {
  $FAIL('#2: The Date.prototype.setFullYear property has not the attributes DontDelete');
}
