// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: If abs(base) is 1 and exponent is −∞, the result is NaN.
esid: sec-applying-the-exp-operator
---*/


var exponent = -Infinity;
var base = new Array();
base[0] = -1;
base[1] = 1
var basenum = 2;

for (var i = 0; i < basenum; i++)
{
	if (!isNaN(Math.pow(base[i],exponent)))
	{
		$ERROR("#1: isNaN(Math.pow(" + base[i] + ", " + exponent + ")) === false");
	}
}
