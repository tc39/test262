// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check ToLength(length) for non Array objects
esid: sec-array.prototype.splice
description: length is arbitrarily
---*/

var obj = {};
obj.splice = Array.prototype.splice;
obj[0] = "x";
obj[4294967295] = "y";
obj.length = 4294967296;
var arr = obj.splice(4294967295, 1);

assert.sameValue(arr.length, 1, '#1: var obj = {}; obj.splice = Array.prototype.splice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.splice(4294967295,1); arr.length === 1');

assert.sameValue(obj.length, 4294967295, '#2: var obj = {}; obj.splice = Array.prototype.splice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.splice(4294967295,1); obj.length === 4294967295');

assert.sameValue(obj[0], "x", '#3: var obj = {}; obj.splice = Array.prototype.splice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.splice(4294967295,1); obj[0] === "x"');

assert.sameValue(obj[4294967295], undefined, '#4: var obj = {}; obj.splice = Array.prototype.splice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.splice(4294967295,1); obj[4294967295] === undefined');

assert.sameValue(arr[0], "y", '#5: var obj = {}; obj.splice = Array.prototype.splice; obj[0] = "x"; obj[4294967295] = "y"; obj.length = 4294967296; var arr = obj.splice(4294967295,1); arr[0] === "y"');
