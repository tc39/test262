// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInteger from deleteCount
esid: sec-array.prototype.splice
description: deleteCount = Infinity
---*/

var x = [0, 1, 2, 3];
var arr = x.splice(0, Number.POSITIVE_INFINITY);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3]; var arr = x.splice(0,Number.POSITIVE_INFINITY); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 4, '#2: var x = [0,1,2,3]; var arr = x.splice(0,Number.POSITIVE_INFINITY); arr.length === 4');

assert.sameValue(arr[0], 0, '#3: var x = [0,1,2,3]; var arr = x.splice(0,Number.POSITIVE_INFINITY); arr[0] === 0');

assert.sameValue(arr[1], 1, '#4: var x = [0,1,2,3]; var arr = x.splice(0,Number.POSITIVE_INFINITY); arr[1] === 1');

assert.sameValue(arr[2], 2, '#5: var x = [0,1,2,3]; var arr = x.splice(0,Number.POSITIVE_INFINITY); arr[2] === 2');

assert.sameValue(arr[3], 3, '#6: var x = [0,1,2,3]; var arr = x.splice(0,Number.POSITIVE_INFINITY); arr[3] === 3');

assert.sameValue(x.length, 0, '#7: var x = [0,1,2,3]; var arr = x.splice(0,Number.POSITIVE_INFINITY); x.length === 0');
