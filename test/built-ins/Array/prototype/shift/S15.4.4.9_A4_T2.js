// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "[[Get]], [[Delete]] from not an inherited property"
esid: sec-array.prototype.shift
description: >
    [[Prototype]] of Array instance is Array.prototype, [[Prototype]
    of Array.prototype is Object.prototype
---*/

Array.prototype[1] = -1;
var x = [0, 1];
x.length = 2;

var shift = x.shift();
assert.sameValue(shift, 0, '#1: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.shift() === 0');

assert.sameValue(x[0], 1, '#2: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.shift(); x[0] === 1');

assert.sameValue(x[1], -1, '#3: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.shift(); x[1] === -1');

Object.prototype[1] = -1;
Object.prototype.length = 2;
Object.prototype.shift = Array.prototype.shift;
x = {
  0: 0,
  1: 1
};

var shift = x.shift();
assert.sameValue(shift, 0, '#4: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.shift = Array.prototype.shift; x = {0:0,1:1}; x.shift() === 0');

assert.sameValue(x[0], 1, '#5: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.shift = Array.prototype.shift; x = {0:0,1:1}; x.shift(); x[0] === 1');

assert.sameValue(x[1], -1, '#6: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.shift = Array.prototype.shift; x = {0:0,1:1}; x.shift(); x[1] === -1');

assert.sameValue(x.length, 1, '#7: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.shift = Array.prototype.shift; x = {0:0,1:1}; x.shift(); x.length === 1');

delete x.length;
assert.sameValue(x.length, 2, '#8: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.shift = Array.prototype.shift; x = {0:0,1:1}; x.shift(); delete x; x.length === 2');
