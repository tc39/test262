// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is exactly 1, Math.acos(x) is +0
 *
 * @section: 15.8.2.2;
 * @path: 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.2_acos/S15.8.2.2_A4.js;
 * @description: Checking if Math.acos(1) equals to +0;
 */

// CHECK#1
var x = 1;
if (Math.acos(x) !== +0)
{
	$ERROR("#1: 'var x = 1; Math.acos(x) !== +0'");
}

