// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.getTime property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @section 15.9.5.9
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.9_Date.prototype.getTime/S15.9.5.9_A3_T1.js
 * @description Checking ReadOnly attribute
 */

x = Date.prototype.getTime.length;
Date.prototype.getTime.length = 1;
if (Date.prototype.getTime.length !== x) {
  $ERROR('#1: The Date.prototype.getTime.length has the attribute ReadOnly');
}


