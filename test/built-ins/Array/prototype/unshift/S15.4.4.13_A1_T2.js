// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The arguments are prepended to the start of the array, such that
    their order within the array is the same as the order in which they appear in
    the argument list
esid: sec-array.prototype.unshift
description: Checking case when unsift is given many arguments
---*/

var x = [];
assert.sameValue(x.length, 0, '#1: x = []; x.length === 0');

x[0] = 0;
var unshift = x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1);
assert.sameValue(unshift, 6, '#2: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1) === 6');

assert.sameValue(x[5], 0, '#3: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[5] === 0');

assert.sameValue(x[0], true, '#4: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[0] === true');

assert.sameValue(x[1], Number.POSITIVE_INFINITY, '#5: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[1] === Number.POSITIVE_INFINITY');

assert.sameValue(x[2], "NaN", '#6: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[2] === "NaN"');

assert.sameValue(x[3], "1", '#7: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[3] === "1"');

assert.sameValue(x[4], -1, '#8: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x[4] === -1');

assert.sameValue(x.length, 6, '#9: x = []; x[0] = 0; x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1); x.length === 6');
