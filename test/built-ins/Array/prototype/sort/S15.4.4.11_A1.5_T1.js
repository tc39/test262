// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If comparefn is undefined, use SortCompare operator
esid: sec-array.prototype.sort
description: Checking sort() and sort(undefined)
---*/

var x = new Array(1, 0);
x.sort();

assert.sameValue(x.length, 2, '#1: var x = new Array(1,0);  x.sort(); x.length === 2');

assert.sameValue(x[0], 0, '#2: var x = new Array(1,0);  x.sort(); x[0] === 0');

assert.sameValue(x[1], 1, '#3: var x = new Array(1,0);  x.sort(); x[1] === 1');

var x = new Array(1, 0);
x.sort(undefined);

assert.sameValue(x.length, 2, '#4: var x = new Array(1,0);  x.sort(undefined); x.length === 2');

assert.sameValue(x[0], 0, '#5: var x = new Array(1,0);  x.sort(undefined); x[0] === 0');

assert.sameValue(x[1], 1, '#6: var x = new Array(1,0);  x.sort(undefined); x[1] === 1');
