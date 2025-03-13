// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The arguments are appended to the end of the array, in
    the order in which they appear. The new length of the array is returned
    as the result of the call
esid: sec-array.prototype.push
description: Checking case when push is given no arguments or one argument
---*/

var x = new Array();
var push = x.push(1);
assert.sameValue(push, 1, '#1: x = new Array(); x.push(1) === 1');

assert.sameValue(x[0], 1, '#2: x = new Array(); x.push(1); x[0] === 1');

var push = x.push();
assert.sameValue(push, 1, '#3: x = new Array(); x.push(1); x.push() === 1');

assert.sameValue(x[1], undefined, '#4: x = new Array(); x.push(1); x.push(); x[1] === unedfined');

var push = x.push(-1);
assert.sameValue(push, 2, '#5: x = new Array(); x.push(1); x.push(); x.push(-1) === 2');

assert.sameValue(x[1], -1, '#6: x = new Array(); x.push(1); x.push(-1); x[1] === -1');

assert.sameValue(x.length, 2, '#7: x = new Array(); x.push(1); x.push(); x.push(-1); x.length === 2');
