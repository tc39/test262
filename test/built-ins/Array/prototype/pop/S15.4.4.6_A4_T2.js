// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "[[Get]], [[Delete]] from not an inherited property"
esid: sec-array.prototype.pop
description: >
    [[Prototype]] of Array instance is Array.prototype, [[Prototype]
    of Array.prototype is Object.prototype
---*/

Array.prototype[1] = -1;
var x = [0, 1];
x.length = 2;

var pop = x.pop();
assert.sameValue(pop, 1, '#1: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.pop() === 1');

assert.sameValue(x[1], -1, '#2: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.pop(); x[1] === -1');

Object.prototype[1] = -1;
Object.prototype.length = 2;
Object.prototype.pop = Array.prototype.pop;
x = {
  0: 0,
  1: 1
};

var pop = x.pop();
assert.sameValue(pop, 1, '#3: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0,1:1}; x.pop() === 1');

assert.sameValue(x[1], -1, '#4: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0,1:1}; x.pop(); x[1] === -1');

assert.sameValue(x.length, 1, '#6: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0,1:1}; x.pop(); x.length === 1');

delete x.length;
assert.sameValue(x.length, 2, '#7: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0,1:1}; x.pop(); delete x; x.length === 2');
