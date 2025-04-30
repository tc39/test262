// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The unshift function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.unshift
description: >
    The arguments are prepended to the start of the array, such that
    their order within the array is the same as the order in which
    they appear in  the argument list
---*/

var obj = {};
obj.unshift = Array.prototype.unshift;

obj.length = NaN;
var unshift = obj.unshift(-1);
assert.sameValue(unshift, 1, '#1: var obj = {}; obj.length = NaN; obj.unshift = Array.prototype.unshift; obj.unshift(-1) === 1');

assert.sameValue(obj.length, 1, '#2: var obj = {}; obj.length = NaN; obj.unshift = Array.prototype.unshift; obj.unshift(-1); obj.length === 1');

assert.sameValue(obj["0"], -1, '#3: var obj = {}; obj.length = NaN; obj.unshift = Array.prototype.unshift; obj.unshift(-1); obj["0"] === -1');

obj.length = Number.NEGATIVE_INFINITY;
var unshift = obj.unshift(-7);
assert.sameValue(unshift, 1, '#7: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.unshift = Array.prototype.unshift; obj.unshift(-7) === 1');

assert.sameValue(obj.length, 1, '#8: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.unshift = Array.prototype.unshift; obj.unshift(-7); obj.length === 1');

assert.sameValue(obj["0"], -7, '#9: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.unshift = Array.prototype.unshift; obj.unshift(-7); obj["0"] === -7');

obj.length = 0.5;
var unshift = obj.unshift(-10);
assert.sameValue(unshift, 1, '#10: var obj = {}; obj.length = 0.5; obj.unshift = Array.prototype.unshift; obj.unshift(-10) === 1');

assert.sameValue(obj.length, 1, '#11: var obj = {}; obj.length = 0.5; obj.unshift = Array.prototype.unshift; obj.unshift(-10); obj.length === 1');

assert.sameValue(obj["0"], -10, '#12: var obj = {}; obj.length = 0.5; obj.unshift = Array.prototype.unshift; obj.unshift(-10); obj["0"] === -10');

obj.length = 1.5;
var unshift = obj.unshift(-13);
assert.sameValue(unshift, 2, '#13: var obj = {}; obj.length = 1.5; obj.unshift = Array.prototype.unshift; obj.unshift(-13) === 2');

assert.sameValue(obj.length, 2, '#14: var obj = {}; obj.length = 1.5; obj.unshift = Array.prototype.unshift; obj.unshift(-13); obj.length === 2');

assert.sameValue(obj["0"], -13, '#15: var obj = {}; obj.length = 1.5; obj.unshift = Array.prototype.unshift; obj.unshift(-13); obj["0"] === -13');

obj.length = new Number(0);
var unshift = obj.unshift(-16);
assert.sameValue(unshift, 1, '#16: var obj = {}; obj.length = new Number(0); obj.unshift = Array.prototype.unshift; obj.unshift(-16) === 1');

assert.sameValue(obj.length, 1, '#17: var obj = {}; obj.length = new Number(0); obj.unshift = Array.prototype.unshift; obj.unshift(-16); obj.length === 1');

assert.sameValue(obj["0"], -16, '#18: var obj = {}; obj.length = new Number(0); obj.unshift = Array.prototype.unshift; obj.unshift(-16); obj["0"] === -16');
