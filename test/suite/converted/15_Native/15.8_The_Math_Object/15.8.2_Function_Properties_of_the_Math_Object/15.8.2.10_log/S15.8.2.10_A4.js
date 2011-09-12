// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is 1, Math.log(x) is +0
 *
 * @section 15.8.2.10
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.10_log/S15.8.2.10_A4.js
 * @description Checking if Math.log(1) equals to +0
 */

// CHECK#1
var x = 1;
if (Math.log(x) !== +0)
{
	$ERROR("#1: 'var x=1; Math.log(x) !== +0'");
}

