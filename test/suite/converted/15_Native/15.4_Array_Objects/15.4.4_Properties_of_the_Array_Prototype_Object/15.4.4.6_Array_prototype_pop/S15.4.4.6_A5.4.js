// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of pop is 0
 *
 * @id: S15.4.4.6_A5.4;
 * @section: 15.4.4.6;
 * @description: pop.length === 1;
 */

//CHECK#1
if (Array.prototype.pop.length !== 0) {
  $ERROR('#1: Array.prototype.pop.length === 0. Actual: ' + (Array.prototype.pop.length));
}


