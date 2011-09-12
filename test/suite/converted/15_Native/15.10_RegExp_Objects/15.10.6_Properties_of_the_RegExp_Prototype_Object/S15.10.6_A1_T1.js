// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The value of the internal [[Prototype]] property of the RegExp prototype object is the Object prototype
 *
 * @section 15.10.6
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/S15.10.6_A1_T1.js
 * @description Checking Object.prototype.isPrototypeOf(RegExp.prototype)
 */

//CHECK#1
if (Object.prototype.isPrototypeOf(RegExp.prototype) !== true) {
	$ERROR('#1: Object.prototype.isPrototypeOf(RegExp.prototype) === true');
}


