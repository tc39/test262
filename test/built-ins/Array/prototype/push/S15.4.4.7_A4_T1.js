// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check ToLength(length) for non Array objects
esid: sec-array.prototype.push
description: length = 4294967296
---*/

var obj = {};
obj.push = Array.prototype.push;
obj.length = 4294967296;

var push = obj.push("x", "y", "z");
assert.sameValue(push, 4294967299, '#1: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z") === 4294967299');

assert.sameValue(obj.length, 4294967299, '#2: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj.length === 4294967299');

assert.sameValue(obj[0], undefined, '#3: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[0] === undefined');

assert.sameValue(obj[1], undefined, '#4: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[1] === undefined');

assert.sameValue(obj[2], undefined, '#5: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[2] === undefined');

assert.sameValue(obj[4294967296], "x", '#6: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[4294967296] === "x"');

assert.sameValue(obj[4294967297], "y", '#7: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[4294967297] === "y"');

assert.sameValue(obj[4294967298], "z", '#8: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[4294967298] === "z"');

var obj = {};
obj.push = Array.prototype.push;
obj.length = 4294967296;

var push = obj.push();
assert.sameValue(push, 4294967296, '#9: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push() === 4294967296');

assert.sameValue(obj.length, 4294967296, '#10: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push(); obj.length === 4294967296');
