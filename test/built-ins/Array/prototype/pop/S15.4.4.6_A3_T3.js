// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check ToLength(length) for non Array objects
esid: sec-array.prototype.pop
description: length = -1
---*/

var obj = {};
obj.pop = Array.prototype.pop;
obj[4294967294] = "x";
obj.length = -1;

var pop = obj.pop();
assert.sameValue(pop, undefined, '#1: var obj = {}; obj.pop = Array.prototype.pop; obj[4294967294] = "x"; obj.length = -1; obj.pop() === undefined');

assert.sameValue(obj.length, 0, '#2: var obj = {}; obj.pop = Array.prototype.pop; obj[4294967294] = "x"; obj.length = -1; obj.pop(); obj.length === 0');

assert.sameValue(obj[4294967294], "x", '#3: var obj = {}; obj.pop = Array.prototype.pop; obj[4294967294] = "x"; obj.length = -1; obj.pop(); obj[4294967294] === "x"');
