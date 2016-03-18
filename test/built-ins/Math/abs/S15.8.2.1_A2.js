// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is -0, Math.abs(x) is +0, if x is +0, Math.abs(x) is +0
es5id: 15.8.2.1_A2
description: Checking if Math.abs(-0) equals to +0 and Math.abs(+0) equals to +0
---*/

// CHECK#1
var x = -0;
var y = Math.abs(x);
if (y !== 0 || 1 / y < 0)
{
	$ERROR("#1: 'var x=-0; Math.abs(x) !== +0'");
}

// some implementations have Math.abs = function (x) { return x > 0 ? x : 0 - x; }, which is wrong for +0
var x = +0;
var y = Math.abs(x);
if (y !== 0 || 1 / y < 0)
{
	$ERROR("#1: 'var x=+0; Math.abs(x) !== +0'");
}
