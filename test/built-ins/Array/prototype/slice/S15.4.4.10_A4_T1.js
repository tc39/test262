// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "[[Get]] from not an inherited property"
esid: sec-array.prototype.slice
description: "[[Prototype]] of Array instance is Array.prototype"
---*/

Array.prototype[1] = 1;
var x = [0];
x.length = 2;
var arr = x.slice();

assert.sameValue(arr[0], 0, '#1: Array.prototype[1] = 1; x = [0]; x.length = 2; var arr = x.slice(); arr[0] === 0');

assert.sameValue(arr[1], 1, '#2: Array.prototype[1] = 1; x = [0]; x.length = 2; var arr = x.slice(); arr[1] === 1');

assert.sameValue(arr.hasOwnProperty('1'), true, '#3: Array.prototype[1] = 1; x = [0]; x.length = 2; var arr = x.slice(); arr.hasOwnProperty(\'1\') === true');
