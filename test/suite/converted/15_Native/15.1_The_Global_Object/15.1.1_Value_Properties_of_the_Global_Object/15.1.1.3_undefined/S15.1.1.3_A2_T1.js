// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The undefined is not ReadOnly
 *
 * @section 15.1.1.3, 15.5.1, 15.6.1, 15.7.1
 * @path 15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.3_undefined/S15.1.1.3_A2_T1.js
 * @description Checking Boolean, Number, String Functions
 * @strict_only
 * @negative
 */

// CHECK#1
undefined = 1;
if (Boolean(undefined) !== true) {
	$ERROR('#1: undefined = 1; Boolean(undefined) === true. Actual: ' + (Boolean(undefined))); 
}

// CHECK#2
undefined = true;
if (Number(undefined) !== 1) {
	$ERROR('#2: undefined = true; Number(undefined) === 1. Actual: ' + (Number(undefined))); 
}

// CHECK#3
undefined = 1;
if (String(undefined) !== "1") {
	$ERROR('#3: undefined = 1; String(undefined) === "1". Actual: ' + (String(undefined))); 
}

