// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "getUTCDate" has { DontEnum } attributes
 *
 * @section 15.9.5.15
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.15_Date.prototype.getUTCDate/S15.9.5.15_A1_T2.js
 * @description Checking absence of DontDelete attribute
 */

if (delete Date.prototype.getUTCDate  === false) {
  $ERROR('#1: The Date.prototype.getUTCDate property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getUTCDate')) {
  $FAIL('#2: The Date.prototype.getUTCDate property has not the attributes DontDelete');
}


