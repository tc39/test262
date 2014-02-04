// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.toLocaleDateString property "length" has { ReadOnly, ! DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.6/S15.9.5.6_A3_T2.js
 * @description Checking DontDelete attribute
 */

if (delete Date.prototype.toLocaleDateString.length  !== true) {
  $ERROR('#1: The Date.prototype.toLocaleDateString.length property does not have the attributes DontDelete');
}

if (Date.prototype.toLocaleDateString.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.toLocaleDateString.length property does not have the attributes DontDelete');
}


