// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInteger from start
esid: sec-array.prototype.slice
description: start is not integer
---*/

var x = [0, 1, 2, 3, 4];
var arr = x.slice(2.5, 4);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3,4]; var arr = x.slice(2.5,4); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 2, '#2: var x = [0,1,2,3,4]; var arr = x.slice(2.5,4); arr.length === 2');

assert.sameValue(arr[0], 2, '#3: var x = [0,1,2,3,4]; var arr = x.slice(2.5,4); arr[0] === 2');

assert.sameValue(arr[1], 3, '#4: var x = [0,1,2,3,4]; var arr = x.slice(2.5,4); arr[1] === 3');

assert.sameValue(arr[3], undefined, '#5: var x = [0,1,2,3,4]; var arr = x.slice(2.5,4); arr[3] === undefined');
