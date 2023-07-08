// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check ToLength(length) for non Array objects
esid: sec-array.prototype.pop
description: length = 4294967297
---*/

var obj = {};
obj.pop = Array.prototype.pop;
obj[0] = "x";
obj[4294967296] = "y";
obj.length = 4294967297;

var pop = obj.pop();
assert.sameValue(pop, "y", '#1: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop() === "y"');

assert.sameValue(obj.length, 4294967296, '#2: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop(); obj.length === 4294967296');

assert.sameValue(obj[0], "x", '#3: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop(); obj[0] === "x"');

assert.sameValue(obj[4294967296], undefined, '#4: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop(); obj[4294967296] === undefined');
