// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    predicate is called with three arguments: the value of the
    element, the index of the element, and the object being traversed.
---*/

var a = [1];

var b = a.find(function (v, i, arr) {
	if (arguments.length !== 3) {
		$ERROR('#1: arguments.length !== 3. Actual: ' + arguments.length);
	}
	if (v !== 1) {
		$ERROR('#2: element value !== 1. Actual: ' + v);
	}
	if (i !== 0) {
		$ERROR('#3: index !== 0. Actual: ' + i);
	}
	if (arr !== a) {
		$ERROR('#4: object being traversed !== a');
	}
});
