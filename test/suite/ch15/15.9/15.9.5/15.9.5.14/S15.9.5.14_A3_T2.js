// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.getDate property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.14_Date.prototype.getDate/S15.9.5.14_A3_T2.js
 * @description Checking DontDelete attribute
 */

if (delete Date.prototype.getDate.length  !== false) {
  $ERROR('#1: The Date.prototype.getDate.length property has the attributes DontDelete');
}

if (!Date.prototype.getDate.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.getDate.length property has the attributes DontDelete');
}


