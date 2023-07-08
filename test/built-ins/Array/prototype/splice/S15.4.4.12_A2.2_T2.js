// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInteger from deleteCount
esid: sec-array.prototype.splice
description: deleteCount = NaN
---*/

var x = [0, 1];
var arr = x.splice(0, NaN);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#0: var x = [0,1]; var arr = x.splice(0,NaN); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 0, '#1: var x = [0,1]; var arr = x.splice(0,NaN); arr.length === 0');

assert.sameValue(x.length, 2, '#2: var x = [0,1]; var arr = x.splice(0,NaN); x.length === 2');

assert.sameValue(x[0], 0, '#3: var x = [0,1]; var arr = x.splice(0,NaN); x[0] === 0');

assert.sameValue(x[1], 1, '#4: var x = [0,1]; var arr = x.splice(0,NaN); x[1] === 1');
