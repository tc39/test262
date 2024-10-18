// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInteger from start
esid: sec-array.prototype.slice
description: start = Infinity
---*/

var x = [0, 1, 2, 3, 4];
var arr = x.slice(Number.POSITIVE_INFINITY, 3);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3,4]; var arr = x.slice(Number.POSITIVE_INFINITY,3); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 0, '#2: var x = [0,1,2,3,4]; var arr = x.slice(Number.POSITIVE_INFINITY,3); arr.length === 0');

assert.sameValue(arr[0], undefined, '#3: var x = [0,1,2,3,4]; var arr = x.slice(Number.POSITIVE_INFINITY,3); arr[0] === undefined');
