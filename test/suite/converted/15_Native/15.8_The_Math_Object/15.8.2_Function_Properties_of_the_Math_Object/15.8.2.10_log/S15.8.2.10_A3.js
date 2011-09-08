// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is +0 or -0, Math.log(x) is -Infinity
 *
 * @section: 15.8.2.10;
 * @path: 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.10_log/S15.8.2.10_A3.js;
 * @description: Checking if Math.log(+0) and Math.log(-0) equals to -Infinity;
 */

// CHECK#1
var x = +0;
if (Math.log(x) !== -Infinity)
{
	$ERROR("#1: 'var x=+0; Math.log(x) !== -Infinity'");
}

// CHECK#2
var x = -0;
if (Math.log(x) !== -Infinity)
{
	$ERROR("#1: 'var x=-0; Math.log(x) !== -Infinity'");
}

