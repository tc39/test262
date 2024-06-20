// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If this object does not have a property named by ToString(j),
    and this object does not have a property named by ToString(k), return +0
esid: sec-array.prototype.sort
description: If comparefn is undefined, use SortCompare operator
---*/

var x = new Array(2);
x.sort();

assert.sameValue(x.length, 2, '#1: var x = new Array(2); x.sort(); x.length === 2');

assert.sameValue(x[0], undefined, '#2: var x = new Array(2); x.sort(); x[0] === undefined');

assert.sameValue(x[1], undefined, '#3: var x = new Array(2); x.sort(); x[1] === undefined');
