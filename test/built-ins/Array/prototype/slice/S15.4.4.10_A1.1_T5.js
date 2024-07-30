// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If start is positive, use min(start, length).
    If end is positive, use min(end, length)
esid: sec-array.prototype.slice
description: length = end > start > 0
---*/

var x = [0, 1, 2, 3, 4];
var arr = x.slice(3, 5);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3,4]; var arr = x.slice(3,5); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 2, '#2: var x = [0,1,2,3,4]; var arr = x.slice(3,5); arr.length === 2');

assert.sameValue(arr[0], 3, '#3: var x = [0,1,2,3,4]; var arr = x.slice(3,5); arr[0] === 3');

assert.sameValue(arr[1], 4, '#4: var x = [0,1,2,3,4]; var arr = x.slice(3,5); arr[1] === 4');

assert.sameValue(arr[3], undefined, '#5: var x = [0,1,2,3,4]; var arr = x.slice(3,5); arr[3] === undefined');
