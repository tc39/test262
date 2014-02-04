// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.getMinutes property "length" has { ReadOnly, ! DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.20/S15.9.5.20_A3_T2.js
 * @description Checking DontDelete attribute
 */

if (delete Date.prototype.getMinutes.length  !== true) {
  $ERROR('#1: The Date.prototype.getMinutes.length property does not have the attributes DontDelete');
}

if (Date.prototype.getMinutes.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.getMinutes.length property does not have the attributes DontDelete');
}


