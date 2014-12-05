// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Infinity is not ReadOnly
es5id: 15.1.1.2_A2_T2
description: Checking typeof Functions
---*/

// CHECK#1
var Finite = true;
if (typeof(Finite) !== "boolean") {
	$ERROR('#1: Finite = true; typeof(NaN) === "boolean". Actual: ' + (typeof(NaN))); 
}
