// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setMonth" has { DontEnum } attributes
 *
 * @section 15.9.5.38
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.38_Date.prototype.setMonth/S15.9.5.38_A1_T2.js
 * @description Checking absence of DontDelete attribute
 */

if (delete Date.prototype.setMonth  === false) {
  $ERROR('#1: The Date.prototype.setMonth property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setMonth')) {
  $FAIL('#2: The Date.prototype.setMonth property has not the attributes DontDelete');
}


