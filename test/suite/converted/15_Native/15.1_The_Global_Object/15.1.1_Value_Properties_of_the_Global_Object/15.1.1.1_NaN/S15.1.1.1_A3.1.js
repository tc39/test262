// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The NaN is DontDelete
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.1_NaN/S15.1.1.1_A3.1.js
 * @description Use delete
 * @strictOnly
 * @negative
 */

// CHECK#1
if (delete NaN !== false) {
	$ERROR('#1: delete NaN === false. Actual: ' + (delete NaN)); 	
}

