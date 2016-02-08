// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If abs(x)>1 and y is -Infinity, Math.pow(x,y) is +0
es5id: 15.8.2.13_A6
description: >
    Checking if Math.pow(x,y) equals to +0, where abs(x)>1 and y is
    -Infinity
---*/

// CHECK#1

var y = -Infinity;
var x = new Array();
x[0] = -Infinity;
x[1] = -1.7976931348623157E308; //largest (by module) finite number
x[2] = -1.000000000000001;
x[3] = 1.000000000000001;
x[4] = 1.7976931348623157E308; //largest finite number
x[5] = +Infinity;
var xnum = 6;

for (var i = 0; i < xnum; i++)
{
	if (Math.pow(x[i],y) !== +0)
	{
		$ERROR("#1: Math.pow(" + x[i] + ", " + y + ") !== +0");
	}
}
