// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "[[Get]] from not an inherited property"
esid: sec-array.prototype.push
description: >
    [[Prototype]] of Array instance is Array.prototype, [[Prototype]
    of Array.prototype is Object.prototype
---*/

Object.prototype[1] = -1;
Object.prototype.length = 1;
Object.prototype.push = Array.prototype.push;
var x = {
  0: 0
};

var push = x.push(1);
assert.sameValue(push, 2, '#1: Object.prototype[1] = 1; Object.prototype.length = -1; Object.prototype.push = Array.prototype.push; x = {0:0}; x.push(1) === 2');

assert.sameValue(x.length, 2, '#2: Object.prototype[1] = 1; Object.prototype.length = -1; Object.prototype.push = Array.prototype.push; x = {0:0}; x.push(1); x.length === 2');

assert.sameValue(x[1], 1, '#3: Object.prototype[1] = 1; Object.prototype.length = -1; Object.prototype.push = Array.prototype.push; x = {0:0}; x.push(1); x[1] === 1');

delete x[1];
assert.sameValue(x[1], -1, '#4: Object.prototype[1] = 1; Object.prototype.length = -1; Object.prototype.push = Array.prototype.push; x = {0:0}; x.push(1); delete x[1]; x[1] === -1');

delete x.length;
assert.sameValue(x.length, 1, '#5: Object.prototype[1] = 1; Object.prototype.length = -1; Object.prototype.push = Array.prototype.push; x = {0:0}; delete x; x.push(1); x.length === 1');
