// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setUTCMilliseconds" has { DontEnum } attributes
 *
 * @id: S15.9.5.29_A1_T1;
 * @section: 15.9.5.29;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.setUTCMilliseconds;
if(x === 1)
  Date.prototype.setUTCMilliseconds = 2;
else
  Date.prototype.setUTCMilliseconds = 1;
if (Date.prototype.setUTCMilliseconds === x) {
  $ERROR('#1: The Date.prototype.setUTCMilliseconds has not the attribute ReadOnly');
}


