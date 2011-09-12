// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.getUTCSeconds property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @section 15.9.5.23
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.23_Date.prototype.getUTCSeconds/S15.9.5.23_A3_T1.js
 * @description Checking ReadOnly attribute
 */

x = Date.prototype.getUTCSeconds.length;
Date.prototype.getUTCSeconds.length = 1;
if (Date.prototype.getUTCSeconds.length !== x) {
  $ERROR('#1: The Date.prototype.getUTCSeconds.length has the attribute ReadOnly');
}


