// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegExp.prototype.toString has not prototype property
 *
 * @section 15.10.6.4, 13.2
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.4_RegExp.prototype.toString/S15.10.6.4_A6.js
 * @description Checking RegExp.prototype.toString.prototype
 */

//CHECK#1
if (RegExp.prototype.toString.prototype !== undefined) {
	$ERROR('#1: RegExp.prototype.toString.prototype === undefined. Actual: ' + (RegExp.prototype.toString.prototype));
}


