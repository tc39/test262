// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setHours" has { DontEnum } attributes
 *
 * @section 15.9.5.34
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.34_Date.prototype.setHours/S15.9.5.34_A1_T1.js
 * @description Checking absence of ReadOnly attribute
 */

x = Date.prototype.setHours;
if(x === 1)
  Date.prototype.setHours = 2;
else
  Date.prototype.setHours = 1;
if (Date.prototype.setHours === x) {
  $ERROR('#1: The Date.prototype.setHours has not the attribute ReadOnly');
}


