// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If start is negative, use max(start + length, 0).
    If deleteCount is positive, use min(deleteCount, length - start)
esid: sec-array.prototype.splice
description: length = -start > deleteCount > 0, itemCount = 0
---*/

var x = [0, 1, 2, 3];
var arr = x.splice(-4, 3);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3]; var arr = x.splice(-4,3); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 3, '#2: var x = [0,1,2,3]; var arr = x.splice(-4,3); arr.length === 3');

assert.sameValue(arr[0], 0, '#3: var x = [0,1,2,3]; var arr = x.splice(-4,3); arr[0] === 0');

assert.sameValue(arr[1], 1, '#4: var x = [0,1,2,3]; var arr = x.splice(-4,3); arr[1] === 1');

assert.sameValue(arr[2], 2, '#5: var x = [0,1,2,3]; var arr = x.splice(-4,3); arr[2] === 2');

assert.sameValue(x.length, 1, '#6: var x = [0,1,2,3]; var arr = x.splice(-4,3); x.length === 1');

assert.sameValue(x[0], 3, '#7: var x = [0,1,2,3]; var arr = x.splice(-4,3); x[0] === 3');
