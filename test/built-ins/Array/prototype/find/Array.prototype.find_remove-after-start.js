// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Elements removed from array after find has been called should be
    visited
features: [Array#find]
---*/

var elementsVisited;

elementsVisited = 0;

[1, 'string', 2].find(function (v, i, arr) {
	elementsVisited++;
	var stringIndex = arr.indexOf('string');
	if (stringIndex !== -1) delete arr[stringIndex];
	if (v === 'string') {
		$ERROR('#1: \'string\' should not exist, it has been deleted');
	}
});

if (elementsVisited !== 3) {
	$ERROR('#2: deleted elements should be visited');
}

elementsVisited = 0;

[1, 'string', 2].find(function (v, i, arr) {
	elementsVisited++;
	var stringIndex = arr.indexOf('string');
	if (stringIndex !== -1) arr.splice(stringIndex, 1);
	if (v === 'string') {
		$ERROR('#3: \'string\' should not exist, it has been deleted');
	}
});

if (elementsVisited !== 3) {
	$ERROR('#4: deleted elements should be visited');
}
