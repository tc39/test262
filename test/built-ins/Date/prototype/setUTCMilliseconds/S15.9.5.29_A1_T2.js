// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype property "setUTCMilliseconds" has { DontEnum }
    attributes
esid: sec-date.prototype.setutcmilliseconds
es5id: 15.9.5.29_A1_T2
description: Checking absence of DontDelete attribute
---*/

if (delete Date.prototype.setUTCMilliseconds === false) {
  $ERROR('#1: The Date.prototype.setUTCMilliseconds property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setUTCMilliseconds')) {
  $ERROR('#2: The Date.prototype.setUTCMilliseconds property has not the attributes DontDelete');
}
