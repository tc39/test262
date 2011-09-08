// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "getUTCMonth" has { DontEnum } attributes
 *
 * @section: 15.9.5.13;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.13_Date.prototype.getUTCMonth/S15.9.5.13_A1_T1.js;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.getUTCMonth;
if(x === 1)
  Date.prototype.getUTCMonth = 2;
else
  Date.prototype.getUTCMonth = 1;
if (Date.prototype.getUTCMonth === x) {
  $ERROR('#1: The Date.prototype.getUTCMonth has not the attribute ReadOnly');
}


