// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegExp.prototype.test has not prototype property
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.3_RegExp.prototype.test/S15.10.6.3_A6.js
 * @description Checking RegExp.prototype.test.prototype
 */

//CHECK#1
if (RegExp.prototype.test.prototype !== undefined) {
  $ERROR('#1: RegExp.prototype.test.prototype === undefined. Actual: ' + (RegExp.prototype.test.prototype));
}


