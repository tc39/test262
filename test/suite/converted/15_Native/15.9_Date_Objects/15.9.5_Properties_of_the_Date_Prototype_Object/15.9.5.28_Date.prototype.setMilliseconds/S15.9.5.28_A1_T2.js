// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setMilliseconds" has { DontEnum } attributes
 *
 * @id: S15.9.5.28_A1_T2;
 * @section: 15.9.5.28;
 * @description: Checking absence of DontDelete attribute;
 */

if (delete Date.prototype.setMilliseconds  === false) {
  $ERROR('#1: The Date.prototype.setMilliseconds property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setMilliseconds')) {
  $FAIL('#2: The Date.prototype.setMilliseconds property has not the attributes DontDelete');
}


