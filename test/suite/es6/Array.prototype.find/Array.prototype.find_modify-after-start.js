// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array may be mutated by calls to the predicate
---*/

[1, 2, 3].find(function (v, i, arr) {
	arr[i + 1] = arr[i + 1] + 1;
	switch (i) {
		case 0:
			if (arr[i] !== 1) {
				$ERROR('#1: arr[0] !== 1. Actual: ' + arr[i]);
			}
			break;
		case 1:
			if (arr[i] !== 3) {
				$ERROR('#2: arr[1] !== 3. Actual: ' + arr[i]);
			}
			break;
		case 2:
			if (arr[i] !== 4) {
				$ERROR('#3: arr[1] !== 4. Actual: ' + arr[i]);
			}
			break;
	}
});
