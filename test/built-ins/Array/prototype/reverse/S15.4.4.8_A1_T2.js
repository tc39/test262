// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The elements of the array are rearranged so as to reverse their order.
    The object is returned as the result of the call
esid: sec-array.prototype.reverse
description: Checking this algorithm, elements are objects and primitives
---*/

var x = [];
x[0] = true;
x[2] = Infinity;
x[4] = undefined;
x[5] = undefined;
x[8] = "NaN";
x[9] = "-1";

var reverse = x.reverse();
assert.sameValue(reverse, x, '#1: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse() === x');

assert.sameValue(x[0], "-1", '#2: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[0] === "-1"');

assert.sameValue(x[1], "NaN", '#3: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[1] === "NaN"');

assert.sameValue(x[2], undefined, '#4: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[2] === undefined');

assert.sameValue(x[3], undefined, '#5: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[3] === undefined');

assert.sameValue(x[4], undefined, '#6: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[4] === undefined');

assert.sameValue(x[5], undefined, '#7: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[5] === undefined');

assert.sameValue(x[6], undefined, '#8: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[6] === undefined');

assert.sameValue(x[7], Infinity, '#9: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[7] === Infinity');

assert.sameValue(x[8], undefined, '#10: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[8] === undefined');

assert.sameValue(x[9], true, '#11: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[9] === true');

x.length = 9;

var reverse = x.reverse();
assert.sameValue(reverse, x, '#1: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse() === x');

assert.sameValue(x[0], undefined, '#12: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[0] === undefined');

assert.sameValue(x[1], Infinity, '#13: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[1] === Infinity');

assert.sameValue(x[2], undefined, '#14: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[2] === undefined');

assert.sameValue(x[3], undefined, '#15: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[3] === undefined');

assert.sameValue(x[4], undefined, '#16: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[4] === undefined');

assert.sameValue(x[5], undefined, '#17: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[5] === undefined');

assert.sameValue(x[6], undefined, '#18: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[6] === undefined');

assert.sameValue(x[7], "NaN", '#19: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[7] === "NaN"');

assert.sameValue(x[8], "-1", '#20: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[8] === "-1"');
