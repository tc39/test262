// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The join function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.join
description: If ToUint32(length) is zero, return the empty string
---*/

var obj = {};
obj.join = Array.prototype.join;

obj.length = 4.5;
assert.sameValue(obj.join(), ",,,", '#1: var obj = {}; obj.length = 4.5; obj.join = Array.prototype.join; obj.join() === ",,,"');

obj[0] = undefined;
obj[1] = 1;
obj[2] = null;
assert.sameValue(obj.join(), ",1,,", '#1: var obj = {}; obj.length = 4.5; obj[0] = undefined; obj[1] = 1; obj[2] = null; obj.join = Array.prototype.join; obj.join() === ",1,,"');

assert.sameValue(obj.length, 4.5, '#1: var obj = {}; obj.length = 4.5; obj[0] = undefined; obj[1] = 1; obj[2] = null; obj.join = Array.prototype.join; obj.join(); obj.length === 4.5');

var obj = {};
obj.join = Array.prototype.join;

var x = new Number(4.5);
obj.length = x;
assert.sameValue(obj.join(), ",,,", '#4: var obj = {}; var x = new Number(4.5); obj.length = x; obj.join = Array.prototype.join; obj.join() === ",,,"');

obj[0] = undefined;
obj[1] = 1;
obj[2] = null;
assert.sameValue(obj.join(), ",1,,", '#5: var obj = {}; var x = new Number(4.5); obj.length = x; obj[0] = undefined; obj[1] = 1; obj[2] = null; obj.join = Array.prototype.join; obj.join() === ",1,,"');

assert.sameValue(obj.length, x, '#6: var obj = {}; var x = new Number(4.5); obj.length = x; obj[0] = undefined; obj[1] = 1; obj[2] = null; obj.join = Array.prototype.join; obj.join(); obj.length === x');
