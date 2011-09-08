// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Array has property prototype
 *
 * @section: 15.4.3.1, 15.2.4.5;
 * @path: 15_Native/15.4_Array_Objects/15.4.3_Properties_of_the_Array_Constructor/15.4.3.1_Array_prototype/S15.4.3.1_A1.js;
 * @description: Checking use hasOwnProperty;
 */

//CHECK#1
if (Array.hasOwnProperty('prototype') !== true) {
	$FAIL('#1: Array.hasOwnProperty(\'prototype\') === true. Actual: ' + (Array.hasOwnProperty('prototype')));
}


