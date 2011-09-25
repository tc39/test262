// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp has property prototype
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.5_Properties_of_the_RegExp_Constructor/S15.10.5.1_A1.js
 * @description Checking RegExp.prototype property
 */

//CHECK#1
if (RegExp.hasOwnProperty('prototype') !== true) {
	$ERROR('#1: RegExp.hasOwnProperty(\'prototype\') === true');
}


