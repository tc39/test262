// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of Array.prototype is undefined
 *
 * @path ch15/15.4/15.4.3/15.4.3.1/S15.4.3.1_A5.js
 * @description Array.prototype.length === undefined
 */

//CHECK#1
if (Array.prototype.length !== undefined) {
  $ERROR('#1.1: Array.prototype.length === undefined. Actual: ' + (Array.prototype.length));
}

