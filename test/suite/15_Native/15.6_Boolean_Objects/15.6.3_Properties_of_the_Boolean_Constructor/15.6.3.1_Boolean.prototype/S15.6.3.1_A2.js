// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Boolean.prototype has the attribute ReadOnly
 *
 * @path 15_Native/15.6_Boolean_Objects/15.6.3_Properties_of_the_Boolean_Constructor/15.6.3.1_Boolean.prototype/S15.6.3.1_A2.js
 * @description Checking if varying the Boolean.prototype property fails
 */

// CHECK#1
x = Boolean.prototype;
Boolean.prototype = 1;
if (Boolean.prototype !== x) {
  $ERROR('#1: Boolean.prototype has the attribute ReadOnly');
}

