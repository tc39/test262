// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "[[Get]], [[Delete]] from not an inherited property"
esid: sec-array.prototype.unshift
description: >
    [[Prototype]] of Array instance is Array.prototype, [[Prototype]
    of Array.prototype is Object.prototype
---*/

Array.prototype[0] = -1;
var x = [1];
x.length = 1;

var unshift = x.unshift(0);
assert.sameValue(unshift, 2, '#1: Array.prototype[0] = -1; x = [1]; x.length = 1; x.unshift(0) === 2');

assert.sameValue(x[0], 0, '#2: Array.prototype[0] = -1; x = [1]; x.length = 1; x.unshift(0); x[0] === 0');

assert.sameValue(x[1], 1, '#3: Array.prototype[0] = -1; x = [1]; x.length = 1; x.unshift(0); x[1] === 1');

delete x[0];

assert.sameValue(x[0], -1, '#4: Array.prototype[0] = -1; x = [1]; x.length = 1; x.unshift(0); delete x[0]; x[0] === -1');

Object.prototype[0] = -1;
Object.prototype.length = 1;
Object.prototype.unshift = Array.prototype.unshift;
x = {
  0: 1
};

var unshift = x.unshift(0);
assert.sameValue(unshift, 2, '#5: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0) === 2');

assert.sameValue(x[0], 0, '#6: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); x[0] === 0');

assert.sameValue(x[1], 1, '#7: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); x[1] === 1');

delete x[0];

assert.sameValue(x[0], -1, '#8: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); delete x[0]; x[0] === -1');

assert.sameValue(x.length, 2, '#9: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); x.length === 1');

delete x.length;
assert.sameValue(x.length, 1, '#10: Object.prototype[1] = -1; Object.prototype.length = 1; Object.prototype.unshift = Array.prototype.unshift; x = {0:0}; x.unshift(0); delete x; x.length === 1');
