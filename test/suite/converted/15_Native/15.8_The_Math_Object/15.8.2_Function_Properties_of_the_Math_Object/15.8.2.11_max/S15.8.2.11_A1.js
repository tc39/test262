// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If no arguments are given, Math.max() is -Infinity
 *
 * @section: 15.8.2.11;
 * @path: 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.11_max/S15.8.2.11_A1.js;
 * @description: Checking if Math.max() equals to -Infinity;
 */

// CHECK#1
if (Math.max() != -Infinity)
{
	$ERROR("#1: 'Math.max() != -Infinity'");
}

