// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setMonth" has { DontEnum } attributes
 *
 * @id: S15.9.5.38_A1_T1;
 * @section: 15.9.5.38;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.setMonth;
if(x === 1)
  Date.prototype.setMonth = 2;
else
  Date.prototype.setMonth = 1;
if (Date.prototype.setMonth === x) {
  $ERROR('#1: The Date.prototype.setMonth has not the attribute ReadOnly');
}


