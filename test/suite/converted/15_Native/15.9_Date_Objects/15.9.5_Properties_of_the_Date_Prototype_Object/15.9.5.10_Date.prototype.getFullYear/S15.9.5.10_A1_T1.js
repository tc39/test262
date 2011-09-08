// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "getFullYear" has { DontEnum } attributes
 *
 * @section: 15.9.5.10;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.10_Date.prototype.getFullYear/S15.9.5.10_A1_T1.js;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.getFullYear;
if(x === 1)
  Date.prototype.getFullYear = 2;
else
  Date.prototype.getFullYear = 1;
if (Date.prototype.getFullYear === x) {
  $ERROR('#1: The Date.prototype.getFullYear has not the attribute ReadOnly');
}


