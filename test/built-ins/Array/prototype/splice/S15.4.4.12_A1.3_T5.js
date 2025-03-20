// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If start is positive, use min(start, length).
    If deleteCount is negative, use 0
esid: sec-array.prototype.splice
description: -start < -length < deleteCount < 0, itemCount > 0
---*/

var x = [0, 1];
var arr = x.splice(3, -1, 2, 3);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#0: var x = [0,1]; var arr = x.splice(3,-1,2,3); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 0, '#1: var x = [0,1]; var arr = x.splice(3,-1,2,3); arr.length === 0');

assert.sameValue(x.length, 4, '#2: var x = [0,1]; var arr = x.splice(3,-1,2,3); x.length === 4');

assert.sameValue(x[0], 0, '#3: var x = [0,1]; var arr = x.splice(3,-1,2,3); x[0] === 0');

assert.sameValue(x[1], 1, '#4: var x = [0,1]; var arr = x.splice(3,-1,2,3); x[1] === 1');

assert.sameValue(x[2], 2, '#5: var x = [0,1]; var arr = x.splice(3,-1,2,3); x[2] === 2');

assert.sameValue(x[3], 3, '#6: var x = [0,1]; var arr = x.splice(3,-1,2,3); x[3] === 3');
