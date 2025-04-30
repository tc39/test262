// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check ToLength(length) for non Array objects
esid: sec-array.prototype.sort
description: length = -4294967294
---*/

var obj = {};
obj.sort = Array.prototype.sort;
obj[0] = "z";
obj[1] = "y";
obj[2] = "x";
obj.length = -4294967294;

assert.sameValue(obj.sort(), obj, '#1: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort() === obj');

assert.sameValue(obj.length, -4294967294, '#2: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort(); obj.length === -4294967294');

assert.sameValue(obj[0], "z", '#3: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort(); obj[0] === "z"');

assert.sameValue(obj[1], "y", '#4: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort(); obj[1] === "y"');

assert.sameValue(obj[2], "x", '#5: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort(); obj[2] === "x"');
