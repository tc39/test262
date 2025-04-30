// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The elements of the array are rearranged so as to reverse their order.
    The object is returned as the result of the call
esid: sec-array.prototype.reverse
description: Checking case when reverse is given no arguments or one argument
---*/

var x = [];
var reverse = x.reverse();
assert.sameValue(reverse, x, '#1: x = []; x.reverse() === x');

x = [];
x[0] = 1;
var reverse = x.reverse();
assert.sameValue(reverse, x, '#2: x = []; x[0] = 1; x.reverse() === x');

x = new Array(1, 2);
var reverse = x.reverse();
assert.sameValue(reverse, x, '#3: x = new Array(1,2); x.reverse() === x');

assert.sameValue(x[0], 2, '#4: x = new Array(1,2); x.reverse(); x[0] === 2');

assert.sameValue(x[1], 1, '#5: x = new Array(1,2); x.reverse(); x[1] === 1');

assert.sameValue(x.length, 2, '#6: x = new Array(1,2); x.reverse(); x.length === 2');
