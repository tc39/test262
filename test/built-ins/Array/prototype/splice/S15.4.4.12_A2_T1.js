// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The splice function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.splice
description: >
    If start is positive, use min(start, length).  If deleteCount is
    positive, use min(deleteCount, length - start)
---*/

var obj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3
};
obj.length = 4;
obj.splice = Array.prototype.splice;
var arr = obj.splice(0, 3, 4, 5);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 3, '#2: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr.length === 3');

assert.sameValue(arr[0], 0, '#3: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr[0] === 0');

assert.sameValue(arr[1], 1, '#4: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr[1] === 1');

assert.sameValue(arr[2], 2, '#5: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr[2] === 2');

assert.sameValue(obj.length, 3, '#6: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj.length === 3');

assert.sameValue(obj[0], 4, '#7: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj[0] === 4');

assert.sameValue(obj[1], 5, '#8: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj[1] === 5');

assert.sameValue(obj[2], 3, '#9: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj[2] === 3');

assert.sameValue(obj[3], undefined, '#10: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj[3] === undefined');
