// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The shift function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.shift
description: >
    The first element of the array is removed from the array and
    returned
---*/

var obj = {};
obj.shift = Array.prototype.shift;

obj.length = 2.5;
var shift = obj.shift();
assert.sameValue(shift, undefined, '#1: var obj = {}; obj.length = 2.5; obj.shift = Array.prototype.shift; obj.shift() === undefined');

assert.sameValue(obj.length, 1, '#2: var obj = {}; obj.length = 2.5; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 1');

obj.length = new Number(2);
var shift = obj.shift();
assert.sameValue(shift, undefined, '#11: var obj = {}; obj.length = new Number(2); obj.shift = Array.prototype.shift; obj.shift() === undefined');

assert.sameValue(obj.length, 1, '#12: var obj = {}; obj.length = new Number(2); obj.shift = Array.prototype.shift; obj.shift(); obj.length === 1');
