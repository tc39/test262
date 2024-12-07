// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The push function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.push
description: >
    The arguments are appended to the end of the array, in  the order
    in which they appear. The new length of the array is returned  as
    the result of the call
---*/

var obj = {};
obj.push = Array.prototype.push;

obj.length = NaN;
var push = obj.push(-1);
assert.sameValue(push, 1, '#1: var obj = {}; obj.length = NaN; obj.push = Array.prototype.push; obj.push(-1) === 1');

assert.sameValue(obj.length, 1, '#2: var obj = {}; obj.length = NaN; obj.push = Array.prototype.push; obj.push(-1); obj.length === 1');

assert.sameValue(obj["0"], -1, '#3: var obj = {}; obj.length = NaN; obj.push = Array.prototype.push; obj.push(-1); obj["0"] === -1');

obj.length = Number.POSITIVE_INFINITY;
assert.throws(TypeError, function() {
  obj.push(-4);
});

assert.sameValue(obj.length, Number.POSITIVE_INFINITY, '#6: var obj = {}; obj.length = Number.POSITIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-4); obj.length === Number.POSITIVE_INFINITY');

assert.sameValue(obj[9007199254740991], undefined, '#6: var obj = {}; obj.length = Number.POSITIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-4); obj[9007199254740991] === undefined');

obj.length = Number.NEGATIVE_INFINITY;
var push = obj.push(-7);
assert.sameValue(push, 1, '#7: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-7) === 1');

assert.sameValue(obj.length, 1, '#8: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-7); obj.length === 1');

assert.sameValue(obj["0"], -7, '#9: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.push = Array.prototype.push; obj.push(-7); obj["0"] === -7');

obj.length = 0.5;
var push = obj.push(-10);
assert.sameValue(push, 1, '#10: var obj = {}; obj.length = 0.5; obj.push = Array.prototype.push; obj.push(-10) === 1');

assert.sameValue(obj.length, 1, '#11: var obj = {}; obj.length = 0.5; obj.push = Array.prototype.push; obj.push(-10); obj.length === 1');

assert.sameValue(obj["0"], -10, '#12: var obj = {}; obj.length = 0.5; obj.push = Array.prototype.push; obj.push(-10); obj["0"] === -10');

obj.length = 1.5;
var push = obj.push(-13);
assert.sameValue(push, 2, '#13: var obj = {}; obj.length = 1.5; obj.push = Array.prototype.push; obj.push(-13) === 2');

assert.sameValue(obj.length, 2, '#14: var obj = {}; obj.length = 1.5; obj.push = Array.prototype.push; obj.push(-13); obj.length === 2');

assert.sameValue(obj["1"], -13, '#15: var obj = {}; obj.length = 1.5; obj.push = Array.prototype.push; obj.push(-13); obj["1"] === -13');

obj.length = new Number(0);
var push = obj.push(-16);
assert.sameValue(push, 1, '#16: var obj = {}; obj.length = new Number(0); obj.push = Array.prototype.push; obj.push(-16) === 1');

assert.sameValue(obj.length, 1, '#17: var obj = {}; obj.length = new Number(0); obj.push = Array.prototype.push; obj.push(-16); obj.length === 1');

assert.sameValue(obj["0"], -16, '#18: var obj = {}; obj.length = new Number(0); obj.push = Array.prototype.push; obj.push(-16); obj["0"] === -16');
