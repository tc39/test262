// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "getHours" has { DontEnum } attributes
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.18_Date.prototype.getHours/S15.9.5.18_A1_T1.js
 * @description Checking absence of ReadOnly attribute
 */

x = Date.prototype.getHours;
if(x === 1)
  Date.prototype.getHours = 2;
else
  Date.prototype.getHours = 1;
if (Date.prototype.getHours === x) {
  $ERROR('#1: The Date.prototype.getHours has not the attribute ReadOnly');
}


