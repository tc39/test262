// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "[[Get]], [[Delete]] from not an inherited property"
esid: sec-array.prototype.reverse
description: >
    [[Prototype]] of Array instance is Array.prototype, [[Prototype]
    of Array.prototype is Object.prototype
---*/

Array.prototype[1] = -1;
var x = [0, 1];
x.length = 2;
x.reverse();

assert.sameValue(x[0], 1, '#1: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.reverse(); x[0] === 1');

assert.sameValue(x[1], 0, '#2: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.reverse(); x[1] === 0');

x.length = 0;

assert.sameValue(x[0], undefined, '#3: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.reverse(); x.length = 0; x[0] === undefined');

assert.sameValue(x[1], -1, '#4: Array.prototype[1] = -1; x = [0,1]; x.length = 2; x.reverse(); x.length = 0; x[1] === -1');

Object.prototype[1] = -1;
Object.prototype.length = 2;
Object.prototype.reverse = Array.prototype.reverse;
x = {
  0: 0,
  1: 1
};
x.reverse();

assert.sameValue(x[0], 1, '#5: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.reverse = Array.prototype.reverse; x = {0:0,1:1}; x.reverse(); x[0] === 0');

assert.sameValue(x[1], 0, '#6: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.reverse = Array.prototype.reverse; x = {0:0,1:1}; x.reverse(); x[1] === 0');

delete x[0];
delete x[1];

assert.sameValue(x[0], undefined, '#7: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.reverse = Array.prototype.reverse; x = {0:0,1:1}; x.reverse(); delete x[0]; delete x[1]; x[0] === undefined');

assert.sameValue(x[1], -1, '#8: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.reverse = Array.prototype.reverse; x = {0:0,1:1}; x.reverse(); delete x[0]; delete x[1]; x[1] === -1');
