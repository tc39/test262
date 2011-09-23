// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is -Infinity, Math.exp(x) is +0
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.8_exp/S15.8.2.8_A5.js
 * @description Checking if Math.exp(-Infinity) is +0
 */

// CHECK#1
var x = -Infinity;
if (Math.exp(x) !== +0)
{
	$ERROR("#1: 'var x = -Infinity; Math.exp(x) !== +0'");
}

