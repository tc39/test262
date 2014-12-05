// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Elements removed from array after find has been called should not
    be visited
---*/

[1, 'string', 2].find(function (v, i, arr) {
	var stringIndex = arr.indexOf('string');
	if (stringIndex !== -1) delete arr[stringIndex];
	if (v === 'string') {
		$ERROR('#1: \'string\' should not exist, it has been deleted');
	}
	if (v === undefined) {
		$ERROR('#2: deleted element should not be visited');
	}
});

[1, 'string', 2].find(function (v, i, arr) {
	var stringIndex = arr.indexOf('string');
	if (stringIndex !== -1) arr.splice(stringIndex, 1);
	if (v === 'string') {
		$ERROR('#3: \'string\' should not exist, it has been deleted');
	}
	if (v === undefined) {
		$ERROR('#4: deleted element should not be visited');
	}
});
