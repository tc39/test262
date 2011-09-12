// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "getDate" has { DontEnum } attributes
 *
 * @section 15.9.5.14
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.14_Date.prototype.getDate/S15.9.5.14_A1_T1.js
 * @description Checking absence of ReadOnly attribute
 */

x = Date.prototype.getDate;
if(x === 1)
  Date.prototype.getDate = 2;
else
  Date.prototype.getDate = 1;
if (Date.prototype.getDate === x) {
  $ERROR('#1: The Date.prototype.getDate has not the attribute ReadOnly');
}


