// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setSeconds" has { DontEnum } attributes
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.30_Date.prototype.setSeconds/S15.9.5.30_A1_T1.js
 * @description Checking absence of ReadOnly attribute
 */

x = Date.prototype.setSeconds;
if(x === 1)
  Date.prototype.setSeconds = 2;
else
  Date.prototype.setSeconds = 1;
if (Date.prototype.setSeconds === x) {
  $ERROR('#1: The Date.prototype.setSeconds has not the attribute ReadOnly');
}


