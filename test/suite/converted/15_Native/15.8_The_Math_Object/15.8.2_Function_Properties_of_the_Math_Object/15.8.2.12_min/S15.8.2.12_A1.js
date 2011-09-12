// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If no arguments are given, Math.min() is +Infinity
 *
 * @section 15.8.2.12
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.12_min/S15.8.2.12_A1.js
 * @description Checking if Math.min() equals to +Infinity
 */

// CHECK#1
if (Math.min() != +Infinity)
{
	$ERROR("#1: 'Math.min() != +Infinity'");
}

