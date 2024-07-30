// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The pop function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.pop
description: >
    The last element ToUint32(length) - 1 of the array is removed from
    the array  and returned
---*/

var obj = {};
obj.pop = Array.prototype.pop;

obj.length = 2.5;
var pop = obj.pop();
assert.sameValue(pop, undefined, '#1: var obj = {}; obj.length = 2.5; obj.pop = Array.prototype.pop; obj.pop() === undefined');

assert.sameValue(obj.length, 1, '#2: var obj = {}; obj.length = 2.5; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 1');

obj.length = new Number(2);
var pop = obj.pop();
assert.sameValue(pop, undefined, '#11: var obj = {}; obj.length = new Number(2); obj.pop = Array.prototype.pop; obj.pop() === undefined');

assert.sameValue(obj.length, 1, '#12: var obj = {}; obj.length = new Number(2); obj.pop = Array.prototype.pop; obj.pop(); obj.length === 1');
