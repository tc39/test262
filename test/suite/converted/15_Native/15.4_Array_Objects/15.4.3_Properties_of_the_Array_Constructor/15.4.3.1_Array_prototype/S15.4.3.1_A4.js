// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Array.prototype property has the attribute ReadOnly
 *
 * @path 15_Native/15.4_Array_Objects/15.4.3_Properties_of_the_Array_Constructor/15.4.3.1_Array_prototype/S15.4.3.1_A4.js
 * @description Checking if varying the Array.prototype property fails
 * @onlyStrict
 * @negative
 */

//CHECK#1
var x = Array.prototype;
Array.prototype = 1;
if (Array.prototype !== x) {
	$ERROR('#1: x = Array.prototype; Array.prototype = 1; Array.prototype === x. Actual: ' + (Array.prototype));
}


