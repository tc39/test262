// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is -Infinity, Math.abs(x) is +Infinity
 *
 * @section 15.8.2.1
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.1_abs/S15.8.2.1_A3.js
 * @description Checking if Math.abs(-Infinity) equals to +Infinity
 */

// CHECK#1
var x = -Infinity;
if (Math.abs(x) !== +Infinity)
{
	$ERROR("#1: 'var x=-Infinity; Math.abs(x) !== +Infinity'");
}

