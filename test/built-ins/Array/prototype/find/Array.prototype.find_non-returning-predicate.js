// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Find with a predicate with no return value should return undefined
---*/

var a = [1, 2, 3].find(function () {});

if (a !== undefined) {
	$ERROR('#1: a !== undefined. Actual: ' + typeof a);
}
