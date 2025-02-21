// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If [[Get]] ToString(j) and [[Get]] ToString(k)
    are both undefined, return +0
esid: sec-array.prototype.sort
description: If comparefn is undefined, use SortCompare operator
---*/

var x = new Array(undefined, undefined);
x.sort();

assert.sameValue(x.length, 2, '#1: var x = new Array(undefined, undefined); x.sort(); x.length === 2');

assert.sameValue(x[0], undefined, '#2: var x = new Array(undefined, undefined); x.sort(); x[0] === undefined');

assert.sameValue(x[1], undefined, '#3: var x = new Array(undefined, undefined); x.sort(); x[1] === undefined');
