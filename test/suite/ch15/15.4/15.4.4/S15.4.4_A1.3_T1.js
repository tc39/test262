// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Array prototype object does not have a length property
 *
 * @path ch15/15.4/15.4.4/S15.4.4_A1.3_T1.js
 * @description Array.prototype.length === undefined
 */

//CHECK#1
if (Array.prototype.length !== undefined) {
  $ERROR('#1.1: Array.prototype.length === undefined. Actual: ' + (Array.prototype.length));
}

