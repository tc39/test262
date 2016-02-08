// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is NaN, Math.round(x) is NaN
es5id: 15.8.2.15_A1
description: Checking if Math.round(x) is NaN, where x is NaN
---*/

// CHECK#1
var x = NaN;
if (!isNaN(Math.round(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.round(x)) === false'");
}
