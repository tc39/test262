// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The reverse function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.reverse
description: >
    Checking this for Object object, elements are objects and
    primitives, length is integer
---*/

var obj = {};
obj.length = 10;
obj.reverse = Array.prototype.reverse;

obj[0] = true;
obj[2] = Infinity;
obj[4] = undefined;
obj[5] = undefined;
obj[8] = "NaN";
obj[9] = "-1";

var reverse = obj.reverse();
assert.sameValue(reverse, obj, '#1: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse() === obj');

assert.sameValue(obj[0], "-1", '#2: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[0] === "-1"');

assert.sameValue(obj[1], "NaN", '#3: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[1] === "NaN"');

assert.sameValue(obj[2], undefined, '#4: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[2] === undefined');

assert.sameValue(obj[3], undefined, '#5: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[3] === undefined');

assert.sameValue(obj[4], undefined, '#6: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[4] === undefined');

assert.sameValue(obj[5], undefined, '#7: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[5] === undefined');

assert.sameValue(obj[6], undefined, '#8: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[6] === undefined');

assert.sameValue(obj[7], Infinity, '#9: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[7] === Infinity');

assert.sameValue(obj[8], undefined, '#10: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[8] === undefined');

assert.sameValue(obj[9], true, '#11: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[9] === true');

obj.length = 9;

var reverse = obj.reverse();
assert.sameValue(reverse, obj, '#1: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse() === obj');

assert.sameValue(obj[0], undefined, '#12: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[0] === undefined');

assert.sameValue(obj[1], Infinity, '#13: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[1] === Infinity');

assert.sameValue(obj[2], undefined, '#14: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[2] === undefined');

assert.sameValue(obj[3], undefined, '#15: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[3] === undefined');

assert.sameValue(obj[4], undefined, '#16: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[4] === undefined');

assert.sameValue(obj[5], undefined, '#17: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[5] === undefined');

assert.sameValue(obj[6], undefined, '#18: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[6] === undefined');

assert.sameValue(obj[7], "NaN", '#19: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[7] === "NaN"');

assert.sameValue(obj[8], "-1", '#20: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[8] === "-1"');
