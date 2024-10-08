// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If start is negative, use max(start + length, 0).
    If deleteCount is negative, use 0
esid: sec-array.prototype.splice
description: start < -length < deleteCount < 0, itemCount > 0
---*/

var x = [0, 1];
var arr = x.splice(-3, -1, 2, 3);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#0: var x = [0,1]; var arr = x.splice(-3,-1,2,3); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 0, '#1: var x = [0,1]; var arr = x.splice(-3,-1,2,3); arr.length === 0');

assert.sameValue(x.length, 4, '#2: var x = [0,1]; var arr = x.splice(-3,-1,2,3); x.length === 4');

assert.sameValue(x[0], 2, '#3: var x = [0,1]; var arr = x.splice(-3,-1,2,3); x[0] === 2');

assert.sameValue(x[1], 3, '#4: var x = [0,1]; var arr = x.splice(-3,-1,2,3); x[1] === 3');

assert.sameValue(x[2], 0, '#5: var x = [0,1]; var arr = x.splice(-3,-1,2,3); x[2] === 0');

assert.sameValue(x[3], 1, '#6: var x = [0,1]; var arr = x.splice(-3,-1,2,3); x[3] === 1');
