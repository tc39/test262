// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The arguments are prepended to the start of the array, such that
    their order within the array is the same as the order in which they appear in
    the argument list
esid: sec-array.prototype.unshift
description: Checking case when unsift is given no arguments or one argument
---*/

var x = new Array();
var unshift = x.unshift(1);
assert.sameValue(unshift, 1, '#1: x = new Array(); x.unshift(1) === 1');

assert.sameValue(x[0], 1, '#2: x = new Array(); x.unshift(1); x[0] === 1');

var unshift = x.unshift();
assert.sameValue(unshift, 1, '#3: x = new Array(); x.unshift(1); x.unshift() === 1');

assert.sameValue(x[1], undefined, '#4: x = new Array(); x.unshift(1); x.unshift(); x[1] === unedfined');

var unshift = x.unshift(-1);
assert.sameValue(unshift, 2, '#5: x = new Array(); x.unshift(1); x.unshift(); x.unshift(-1) === 2');

assert.sameValue(x[0], -1, '#6: x = new Array(); x.unshift(1); x.unshift(-1); x[0] === -1');

assert.sameValue(x[1], 1, '#7: x = new Array(); x.unshift(1); x.unshift(-1); x[1] === 1');

assert.sameValue(x.length, 2, '#8: x = new Array(); x.unshift(1); x.unshift(); x.unshift(-1); x.length === 2');
