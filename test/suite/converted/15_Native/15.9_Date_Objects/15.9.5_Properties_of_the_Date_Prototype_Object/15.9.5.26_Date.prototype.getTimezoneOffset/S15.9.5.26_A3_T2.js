// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.getTimezoneOffset property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @section: 15.9.5.26;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.26_Date.prototype.getTimezoneOffset/S15.9.5.26_A3_T2.js;
 * @description: Checking DontDelete attribute;
 */

if (delete Date.prototype.getTimezoneOffset.length  !== false) {
  $ERROR('#1: The Date.prototype.getTimezoneOffset.length property has the attributes DontDelete');
}

if (!Date.prototype.getTimezoneOffset.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.getTimezoneOffset.length property has the attributes DontDelete');
}


