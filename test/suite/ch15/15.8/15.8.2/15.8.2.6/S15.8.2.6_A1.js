// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is NaN, Math.ceil(x) is NaN
description: Checking if Math.ceil(NaN) is NaN
---*/

// CHECK#1
var x = NaN;
if (!isNaN(Math.ceil(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.ceil(x)) === false'");
}
