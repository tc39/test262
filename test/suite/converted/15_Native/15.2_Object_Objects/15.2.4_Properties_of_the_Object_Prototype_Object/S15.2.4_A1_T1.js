// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object prototype object has not prototype
 *
 * @id: S15.2.4_A1_T1;
 * @section: 15.2.4, 8.6.2;
 * @description: Checking if obtaining Object.prototype.prototype fails;
 */

// CHECK#1
if (Object.prototype.prototype !== undefined) {
  $ERROR('#1: Object prototype has not prototype');
}

