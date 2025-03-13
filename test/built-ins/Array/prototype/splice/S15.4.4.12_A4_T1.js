// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "[[Get]] from not an inherited property"
esid: sec-array.prototype.splice
description: >
    [[Prototype]] of Array instance is Array.prototype, [[Prototype]
    of Array.prototype is Object.prototype
---*/

Array.prototype[1] = -1;
var x = [0, 1];
var arr = x.splice(1, 1);

assert.sameValue(arr.length, 1, '#1: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1); arr.length === 1');

assert.sameValue(arr[0], 1, '#2: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1); arr[0] === 1');

assert.sameValue(arr[1], -1, '#3: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1); arr[1] === -1');

assert.sameValue(x.length, 1, '#4: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1); x.length === 1');

assert.sameValue(x[0], 0, '#5: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1); x[0] === 0');

assert.sameValue(x[1], -1, '#6: Array.prototype[1] = -1; x = [0,1]; var arr = x.splice(1,1); x[1] === -1');


Object.prototype[1] = -1;
Object.prototype.length = 2;
Object.prototype.splice = Array.prototype.splice;
x = {
  0: 0,
  1: 1
};
var arr = x.splice(1, 1);

assert.sameValue(arr.length, 1, '#7: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1); arr.length === 1');

assert.sameValue(arr[0], 1, '#8: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1); arr[0] === 1');

assert.sameValue(arr[1], -1, '#9: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1); arr[1] === -1');

assert.sameValue(x.length, 1, '#10: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1); x.length === 1');

assert.sameValue(x[0], 0, '#11: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1); x[0] === 0');

assert.sameValue(x[1], -1, '#12: Object.prototype[1] = -1; Object.prototype.length = 2; Object.prototype.splice = Array.prototype.splice; x = {0:0, 1:1}; var arr = x.splice(1,1); x[1] === -1');
