// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInteger from deleteCount
esid: sec-array.prototype.splice
description: deleteCount is not integer
---*/

var x = [0, 1, 2, 3];
var arr = x.splice(1, 3.5);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3]; var arr = x.splice(1,3.5); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 3, '#2: var x = [0,1,2,3]; var arr = x.splice(1,3.5); arr.length === 3');

assert.sameValue(arr[0], 1, '#3: var x = [0,1,2,3]; var arr = x.splice(1,3.5); arr[0] === 1');

assert.sameValue(arr[1], 2, '#4: var x = [0,1,2,3]; var arr = x.splice(1,3.5); arr[1] === 2');

assert.sameValue(arr[2], 3, '#5: var x = [0,1,2,3]; var arr = x.splice(1,3.5); arr[2] === 3');

assert.sameValue(x.length, 1, '#6: var x = [0,1,2,3]; var arr = x.splice(1,3.5); x.length === 1');

assert.sameValue(x[0], 0, '#7: var x = [0,1,2,3]; var arr = x.splice(1,3.5); x[0] === 0');
