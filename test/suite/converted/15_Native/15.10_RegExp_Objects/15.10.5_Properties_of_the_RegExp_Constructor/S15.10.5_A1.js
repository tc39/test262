// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegExp constructor has length property whose value is 2
 *
 * @section 15.10.5
 * @path 15_Native/15.10_RegExp_Objects/15.10.5_Properties_of_the_RegExp_Constructor/S15.10.5_A1.js
 * @description Checking RegExp.length property
 */

 //CHECK#1
if (RegExp.length !== 2) {
	$ERROR('#1: RegExp.length === 2. Actual: ' + (RegExp.length));
}


