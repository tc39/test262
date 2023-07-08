// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInteger from start
esid: sec-array.prototype.splice
description: start = Infinity
---*/

var x = [0, 1, 2, 3];
var arr = x.splice(Number.POSITIVE_INFINITY, 3);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3]; var arr = x.splice(Number.POSITIVE_INFINITY,3); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 0, '#2: var x = [0,1,2,3]; var arr = x.splice(Number.POSITIVE_INFINITY,3); arr.length === 0');

assert.sameValue(x[0], 0, '#3: var x = [0,1,2,3]; var x = x.splice(Number.POSITIVE_INFINITY,3); x[0] === 0');

assert.sameValue(x[1], 1, '#4: var x = [0,1,2,3]; var x = x.splice(Number.POSITIVE_INFINITY,3); x[1] === 1');

assert.sameValue(x[2], 2, '#5: var x = [0,1,2,3]; var x = x.splice(Number.POSITIVE_INFINITY,3); x[2] === 2');

assert.sameValue(x[3], 3, '#6: var x = [0,1,2,3]; var x = x.splice(Number.POSITIVE_INFINITY,3); x[3] === 3');
