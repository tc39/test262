// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.getFullYear property "length" has { ReadOnly, ! DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.10/S15.9.5.10_A3_T2.js
 * @description Checking DontDelete attribute
 */

if (delete Date.prototype.getFullYear.length  !== true) {
  $ERROR('#1: The Date.prototype.getFullYear.length property does not have the attributes DontDelete');
}

if (Date.prototype.getFullYear.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.getFullYear.length property does not have the attributes DontDelete');
}


