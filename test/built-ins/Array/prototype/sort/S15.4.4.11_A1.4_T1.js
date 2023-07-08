// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If [[Get]] ToString(j) is undefined, return 1.
    If [[]Get] ToString(k) is undefined, return -1
esid: sec-array.prototype.sort
description: If comparefn is undefined, use SortCompare operator
---*/

var x = new Array(undefined, 1);
x.sort();

assert.sameValue(x.length, 2, '#1: var x = new Array(undefined, 1); x.sort(); x.length === 2');

assert.sameValue(x[0], 1, '#2: var x = new Array(undefined, 1); x.sort(); x[0] === 1');

assert.sameValue(x[1], undefined, '#3: var x = new Array(undefined, 1); x.sort(); x[1] === undefined');

var x = new Array(1, undefined);
x.sort();

assert.sameValue(x.length, 2, '#4: var x = new Array(1, undefined); x.sort(); x.length === 2');

assert.sameValue(x[0], 1, '#5: var x = new Array(1, undefined); x.sort(); x[0] === 1');

assert.sameValue(x[1], undefined, '#6: var x = new Array(1, undefined); x.sort(); x[1] === undefined');
