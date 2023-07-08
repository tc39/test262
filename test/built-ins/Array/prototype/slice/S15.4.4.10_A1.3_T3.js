// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If start is positive, use min(start, length).
    If end is negative, use max(end + length, 0)
esid: sec-array.prototype.slice
description: length = abs(end) > start = 0, end < 0
---*/

var x = [0, 1, 2, 3, 4];
var arr = x.slice(0, -5);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3,4]; var arr = x.slice(0,-5); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 0, '#2: var x = [0,1,2,3,4]; var arr = x.slice(0,-5); arr.length === 0');

assert.sameValue(arr[0], undefined, '#3: var x = [0,1,2,3,4]; var arr = x.slice(0,-5); arr[0] === undefined');
