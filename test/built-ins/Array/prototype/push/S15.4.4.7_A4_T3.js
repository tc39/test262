// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check ToLength(length) for non Array objects
esid: sec-array.prototype.push
description: length = -1
---*/

var obj = {};
obj.push = Array.prototype.push;
obj.length = -1;

var push = obj.push("x", "y", "z");
assert.sameValue(push, 3, '#1: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z") === 3');

assert.sameValue(obj.length, 3, '#2: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj.length === 3');

assert.sameValue(obj[4294967295], undefined, '#3: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[4294967295] === undefined');

assert.sameValue(obj[4294967296], undefined, '#4: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[4294967296] === undefined');

assert.sameValue(obj[4294967297], undefined, '#5: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[4294967297] === undefined');

assert.sameValue(obj[0], "x", '#3: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[0] === "x"');

assert.sameValue(obj[1], "y", '#4: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[1] === "y"');

assert.sameValue(obj[2], "z", '#5: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[2] === "z"');
