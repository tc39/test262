// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Infinity is not ReadOnly
 *
 * @section 15.1.1.2, 11.4.3
 * @path 15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.2_Infinity/S15.1.1.2_A2_T2.js
 * @description Checking typeof Functions
 */

// CHECK#1
var Finite = true;
if (typeof(Finite) !== "boolean") {
	$ERROR('#1: Finite = true; typeof(NaN) === "boolean". Actual: ' + (typeof(NaN))); 
}

