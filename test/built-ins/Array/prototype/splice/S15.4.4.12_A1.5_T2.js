// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Splice with undefined arguments
esid: sec-array.prototype.splice
description: end === undefined
---*/

var x = [0, 1, 2, 3];
var arr = x.splice(1, undefined);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3]; var arr = x.splice(1,undefined); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 0, '#2: var x = [0,1,2,3]; var arr = x.splice(1,undefined); arr.length === 0');

assert.sameValue(x.length, 4, '#3: var x = [0,1,2,3]; var arr = x.splice(1,undefined); x.length === 4');

assert.sameValue(x[0], 0, '#4: var x = [0,1,2,3]; var arr = x.splice(1,undefined); x[0] === 0');

assert.sameValue(x[1], 1, '#5: var x = [0,1,2,3]; var arr = x.splice(1,undefined); x[1] === 1');

assert.sameValue(x[2], 2, '#6: var x = [0,1,2,3]; var arr = x.splice(1,undefined); x[2] === 2');

assert.sameValue(x[3], 3, '#7: var x = [0,1,2,3]; var arr = x.splice(1,undefined); x[3] === 3');
