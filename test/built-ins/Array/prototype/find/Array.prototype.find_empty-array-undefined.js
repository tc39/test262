// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Find on empty array should return undefined
---*/

var a = [].find(function () {
	return true;
});

if (a !== undefined) {
	$ERROR('#1: a !== undefined. Actual: ' + typeof a);
}
