// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The NaN is not ReadOnly
 *
 * @section: 15.1.1.1, 11.4.3;
 * @path: 15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.1_NaN/S15.1.1.1_A2_T2.js;
 * @description: Checking typeof Operator;
 */

// CHECK#1
NaN = true;
if (typeof(NaN) !== "boolean") {
	$ERROR('#1: NaN = true; typeof(NaN) === "boolean". Actual: ' + (typeof(NaN))); 
}

