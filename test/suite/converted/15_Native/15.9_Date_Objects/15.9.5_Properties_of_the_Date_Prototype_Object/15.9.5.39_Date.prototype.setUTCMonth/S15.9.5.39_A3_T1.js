// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.setUTCMonth property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @id: S15.9.5.39_A3_T1;
 * @section: 15.9.5.39;
 * @description: Checking ReadOnly attribute;
 */

x = Date.prototype.setUTCMonth.length;
Date.prototype.setUTCMonth.length = 1;
if (Date.prototype.setUTCMonth.length !== x) {
  $ERROR('#1: The Date.prototype.setUTCMonth.length has the attribute ReadOnly');
}


