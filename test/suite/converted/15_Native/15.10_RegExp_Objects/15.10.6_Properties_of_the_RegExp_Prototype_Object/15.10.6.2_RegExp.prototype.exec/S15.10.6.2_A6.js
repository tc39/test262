// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegExp.prototype.exec has not prototype property
 *
 * @section: 15.10.6.2, 13.2;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.2_RegExp.prototype.exec/S15.10.6.2_A6.js;
 * @description: Checking RegExp.prototype.exec.prototype;
 */

//CHECK#1
if (RegExp.prototype.exec.prototype !== undefined) {
  $ERROR('#1: RegExp.prototype.exec.prototype === undefined. Actual: ' + (RegExp.prototype.exec.prototype));
}

