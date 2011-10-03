// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If abs(x)==1 and y is +Infinity, Math.pow(x,y) is NaN
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.13_pow/S15.8.2.13_A7.js
 * @description Checking if Math.pow(x,y) is NaN, where abs(x)==1 and y is +Infinity
 */

// CHECK#1

y = +Infinity;
x = new Array();
x[0] = -1;
x[1] = 1
xnum = 2;

for (i = 0; i < xnum; i++)
{
	if (!isNaN(Math.pow(x[i],y)))
	{
		$FAIL("#1: isNaN(Math.pow(" + x[i] + ", " + y + ")) === false");
	}
}

