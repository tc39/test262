// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setUTCHours" has { DontEnum } attributes
 *
 * @section: 15.9.5.35;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.35_Date.prototype.setUTCHours/S15.9.5.35_A1_T1.js;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.setUTCHours;
if(x === 1)
  Date.prototype.setUTCHours = 2;
else
  Date.prototype.setUTCHours = 1;
if (Date.prototype.setUTCHours === x) {
  $ERROR('#1: The Date.prototype.setUTCHours has not the attribute ReadOnly');
}


