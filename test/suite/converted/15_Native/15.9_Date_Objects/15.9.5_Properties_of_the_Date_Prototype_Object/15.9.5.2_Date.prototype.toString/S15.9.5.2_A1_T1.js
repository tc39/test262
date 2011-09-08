// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "toString" has { DontEnum } attributes
 *
 * @section: 15.9.5.2;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.2_Date.prototype.toString/S15.9.5.2_A1_T1.js;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.toString;
if(x === 1)
  Date.prototype.toString = 2;
else
  Date.prototype.toString = 1;
if (Date.prototype.toString === x) {
  $ERROR('#1: The Date.prototype.toString has not the attribute ReadOnly');
}


