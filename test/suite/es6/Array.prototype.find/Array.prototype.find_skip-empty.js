// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    predicate is called only for elements of the array which actually
    exist; it is not called for missing elements of the array
flags: [path]
---*/

var a = [];

a[10] = 1;
a[11] = 2;

var b = a.find(function (v) {
	return v !== 1;
});

if (b !== 2) {
	$ERROR('#1: b !== 2. Actual: ' + b);
}
