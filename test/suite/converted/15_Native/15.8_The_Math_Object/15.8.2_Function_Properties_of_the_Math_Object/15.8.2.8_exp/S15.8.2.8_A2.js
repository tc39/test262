// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is +0, Math.exp(x) is 1
 *
 * @section: 15.8.2.8;
 * @path: 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.8_exp/S15.8.2.8_A2.js;
 * @description: Checking if Math.exp(+0) is 1;
 */

// CHECK#1
var x = +0;
if (Math.exp(x) !== 1)
{
	$ERROR("#1: 'var x = +0; Math.exp(x) !== 1'");
}

