// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Infinity is not ReadOnly
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.2_Infinity/S15.1.1.2_A2_T1.js
 * @description Checking Boolean, Number, String Functions
 * @strictOnly
 * @negative
 */

// CHECK#1
Infinity = 0;
if (Boolean(Infinity) !== false) {
	$ERROR('#1: Infinity = 0; Boolean(Infinity) === false. Actual: ' + (Boolean(Infinity))); 
}

// CHECK#2
Infinity = false;
if (Number(Infinity) !== 0) {
	$ERROR('#2: Infinity = false; Number(Infinity) === 0. Actual: ' + (Number(Infinity))); 
}

// CHECK#3
Infinity = 0;
if (String(Infinity) !== "0") {
	$ERROR('#3: Infinity = 0; String(Infinity) === "0". Actual: ' + (String(Infinity))); 
}


