// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is equal to +0, Math.sqrt(x) is +0
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.17_sqrt/S15.8.2.17_A3.js
 * @description Checking if Math.sqrt(+0) equals to +0
 */

// CHECK#1
var x = +0;
if (Math.sqrt(x) !== +0)
{
	$ERROR("#1: 'var x=+0; Math.sqrt(x) !== +0'");
}

