// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.getUTCDate property "length" has { ReadOnly, ! DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.15/S15.9.5.15_A3_T2.js
 * @description Checking DontDelete attribute
 */

if (delete Date.prototype.getUTCDate.length  !== true) {
  $ERROR('#1: The Date.prototype.getUTCDate.length property does not have the attributes DontDelete');
}

if (Date.prototype.getUTCDate.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.getUTCDate.length property does not have the attributes DontDelete');
}


