// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is NaN, Math.sin(x) is NaN
 *
 * @section 15.8.2.16
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.16_sin/S15.8.2.16_A1.js
 * @description Checking if Math.sin(NaN) is NaN
 */

// CHECK#1
var x = NaN;
if (!isNaN(Math.sin(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.sin(x)) === false'");
}

