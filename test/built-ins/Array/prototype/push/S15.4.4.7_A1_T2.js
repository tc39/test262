// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The arguments are appended to the end of the array, in
    the order in which they appear. The new length of the array is returned
    as the result of the call
esid: sec-array.prototype.push
description: Checking case when push is given many arguments
---*/

var x = [];
assert.sameValue(x.length, 0, '#1: x = []; x.length === 0');

x[0] = 0;
var push = x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1);
assert.sameValue(push, 6, '#2: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1) === 6');

assert.sameValue(x[0], 0, '#3: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[0] === 0');

assert.sameValue(x[1], true, '#4: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[1] === true');

assert.sameValue(x[2], Number.POSITIVE_INFINITY, '#5: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[2] === Number.POSITIVE_INFINITY');

assert.sameValue(x[3], "NaN", '#6: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[3] === "NaN"');

assert.sameValue(x[4], "1", '#7: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[4] === "1"');

assert.sameValue(x[5], -1, '#8: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[5] === -1');

assert.sameValue(x.length, 6, '#9: x = []; x[0] = 0; x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x.length === 6');
