// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The slice function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.slice
description: >
    If start is positive, use min(start, length).  If end is positive,
    use min(end, length)
---*/

var obj = {};
obj.slice = Array.prototype.slice;
obj[0] = 0;
obj[1] = 1;
obj[2] = 2;
obj[3] = 3;
obj[4] = 4;
obj.length = 5;
var arr = obj.slice(0, 3);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = 0; obj[1] = 1; obj[2] = 2; obj[3] = 3; obj[4] = 4; obj.length = 5; var arr = obj.slice(0,3); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 3, '#2: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = 0; obj[1] = 1; obj[2] = 2; obj[3] = 3; obj[4] = 4; obj.length = 5; var arr = obj.slice(0,3); arr.length === 3');

assert.sameValue(arr[0], 0, '#3: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = 0; obj[1] = 1; obj[2] = 2; obj[3] = 3; obj[4] = 4; obj.length = 5; var arr = obj.slice(0,3); arr[0] === 0');

assert.sameValue(arr[1], 1, '#4: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = 0; obj[1] = 1; obj[2] = 2; obj[3] = 3; obj[4] = 4; obj.length = 5; var arr = obj.slice(0,3); arr[1] === 1');

assert.sameValue(arr[2], 2, '#5: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = 0; obj[1] = 1; obj[2] = 2; obj[3] = 3; obj[4] = 4; obj.length = 5; var arr = obj.slice(0,3); arr[2] === 2');

assert.sameValue(arr[3], undefined, '#6: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = 0; obj[1] = 1; obj[2] = 2; obj[3] = 3; obj[4] = 4; obj.length = 5; var arr = obj.slice(0,3); arr[3] === undefined');
