// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is NaN, Math.abs(x) is NaN
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.1_abs/S15.8.2.1_A1.js
 * @description Checking if Math.abs(NaN) is NaN
 */

// CHECK#1
var x = NaN;
if (!isNaN(Math.abs(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.abs(x)) === false'");
}

