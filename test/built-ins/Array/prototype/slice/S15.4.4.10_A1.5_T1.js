// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If end is undefined use length
esid: sec-array.prototype.slice
description: end === undefined
---*/

var x = [0, 1, 2, 3, 4];
var arr = x.slice(3, undefined);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3,4]; var arr = x.slice(3, undefined); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 2, '#2: var x = [0,1,2,3,4]; var arr = x.slice(3, undefined); arr.length === 2');

assert.sameValue(arr[0], 3, '#3: var x = [0,1,2,3,4]; var arr = x.slice(3, undefined); arr[0] === 3');

assert.sameValue(arr[1], 4, '#4: var x = [0,1,2,3,4]; var arr = x.slice(3, undefined); arr[1] === 4');

assert.sameValue(arr[2], undefined, '#5: var x = [0,1,2,3,4]; var arr = x.slice(3, undefined); arr[2] === undefined');
