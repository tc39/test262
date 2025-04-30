// Copyright (c) 2014 Thomas Dahlstrom. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.sort
description: >
    Array.prototype.sort does not change non-existent elements to
    undefined elements, that means holes are preserved (cf. spec  text
    about [[Delete]] and sparse arrays)
author: Thomas Dahlstrom (tdahlstrom@gmail.com)
---*/

var array = ['a', , void 0];

//CHECK#1
assert.sameValue(array.length, 3, '#1: array.length !== 3');

//CHECK#2
assert.sameValue(array.hasOwnProperty('0'), true, "#2: array.hasOwnProperty('0')");

//CHECK#3
assert.sameValue(array.hasOwnProperty('1'), false, "#3: array.hasOwnProperty('1')");

//CHECK#4
assert.sameValue(array.hasOwnProperty('2'), true, "#4: array.hasOwnProperty('2')");

array.sort();

//CHECK#5
assert.sameValue(array.length, 3, '#5: array.length !== 3');

//CHECK#6
assert.sameValue(array.hasOwnProperty('0'), true, "#6: array.hasOwnProperty('0')");

//CHECK#7
assert.sameValue(array.hasOwnProperty('1'), true, "#7: array.hasOwnProperty('1')");

//CHECK#8
assert.sameValue(array.hasOwnProperty('2'), false, "#8: array.hasOwnProperty('2')");
