// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The NaN is not ReadOnly
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.1_NaN/S15.1.1.1_A2_T1.js
 * @description Checking Boolean, Number, String Functions
 * @strictOnly
 * @negative
 */

// CHECK#1
NaN = 1;
if (Boolean(NaN) !== true) {
	$ERROR('#1: NaN = 1; Boolean(NaN) === true. Actual: ' + (Boolean(NaN))); 
}

// CHECK#2
NaN = true;
if (Number(NaN) !== 1) {
	$ERROR('#2: NaN = true; Number(NaN) === 1. Actual: ' + (Number(NaN))); 
}

// CHECK#3
NaN = 1;
if (String(NaN) !== "1") {
	$ERROR('#3: NaN = 1; String(NaN) === "1". Actual: ' + (String(NaN))); 
}

