// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check ToLength(length) for non Array objects
esid: sec-array.prototype.unshift
description: length = -4294967295
---*/

var obj = {};
obj.unshift = Array.prototype.unshift;
obj[0] = "";
obj.length = -4294967295;

var unshift = obj.unshift("x", "y", "z");
assert.sameValue(unshift, 3, '#1: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = -4294967295; obj.unshift("x", "y", "z") === 3');

assert.sameValue(obj.length, 3, '#2: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = -4294967295; obj.unshift("x", "y", "z"); obj.length === 3');

assert.sameValue(obj[0], "x", '#3: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = -4294967295; obj.unshift("x", "y", "z"); obj[0] === "x"');

assert.sameValue(obj[1], "y", '#4: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = -4294967295; obj.unshift("x", "y", "z"); obj[1] === "y"');

assert.sameValue(obj[2], "z", '#5: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = -4294967295; obj.unshift("x", "y", "z"); obj[2] === "z"');

assert.sameValue(obj[3], undefined, '#6: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = -4294967295; obj.unshift("x", "y", "z"); obj[3] === undefined');
