// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check ToLength(length) for non Array objects
esid: sec-array.prototype.push
description: length = 4294967295
---*/

var obj = {};
obj.push = Array.prototype.push;
obj.length = 4294967295;

var push = obj.push("x", "y", "z");
assert.sameValue(push, 4294967298, '#1: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z") === 4294967298');

assert.sameValue(obj.length, 4294967298, '#2: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj.length === 4294967298');

assert.sameValue(obj[4294967295], "x", '#3: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj[4294967295] === "x"');

assert.sameValue(obj[4294967296], "y", '#4: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj[4294967296] === "y"');

assert.sameValue(obj[4294967297], "z", '#5: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj[4294967297] === "z"');
