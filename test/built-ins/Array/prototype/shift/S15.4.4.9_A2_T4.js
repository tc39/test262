// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The shift function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.shift
description: >
    The first element of the array is removed from the array and
    returned
---*/

var obj = {};
obj["0"] = 0;
obj["3"] = 3;
obj.shift = Array.prototype.shift;

obj.length = 4;
var shift = obj.shift();
assert.sameValue(shift, 0, '#1: var obj = {}; obj["0"] = 0; obj["3"] = 3; obj.length = 4; obj.shift = Array.prototype.shift; obj.shift() === 0');

assert.sameValue(obj.length, 3, '#2: var obj = {}; obj["0"] = 0; obj["3"] = 3; obj.length = 4; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 3');

var shift = obj.shift();
assert.sameValue(shift, undefined, '#3: var obj = {}; obj["0"] = 0; obj["3"] = 3; obj.length = 4; obj.shift = Array.prototype.shift; obj.shift(); obj.shift() === undefined');

assert.sameValue(obj.length, 2, '#4: var obj = {}; obj["0"] = 0; obj["3"] = 3; obj.length = 4; obj.shift = Array.prototype.shift; obj.shift(); obj.shift(); obj.length === 2');

obj.length = 1;
var shift = obj.shift();
assert.sameValue(shift, undefined, '#5: var obj = {}; obj["0"] = 0; obj["3"] = 3; obj.length = 4; obj.shift = Array.prototype.shift; obj.shift(); obj.shift(); obj.length = 1; obj.shift() === undefined');

assert.sameValue(obj.length, 0, '#6: var obj = {}; obj["0"] = 0; obj["3"] = 3; obj.length = 4; obj.shift = Array.prototype.shift; obj.shift(); obj.shift(); obj.length = 1; obj.shift(); obj.length === 0');
