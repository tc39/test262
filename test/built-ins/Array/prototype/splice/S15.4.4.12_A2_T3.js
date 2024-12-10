// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The splice function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.splice
description: >
    If start is positive, use min(start, length).  If deleteCount is
    negative, use 0
---*/

var obj = {
  0: 0,
  1: 1
};
obj.length = 2;
obj.splice = Array.prototype.splice;
var arr = obj.splice(0, -1, 2, 3);

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#0: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 0, '#1: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); arr.length === 0');

assert.sameValue(obj.length, 4, '#2: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj.length === 4');

assert.sameValue(obj[0], 2, '#3: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[0] === 2');

assert.sameValue(obj[1], 3, '#4: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[1] === 3');

assert.sameValue(obj[2], 0, '#5: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[2] === 0');

assert.sameValue(obj[3], 1, '#6: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[3] === 1');

assert.sameValue(obj[4], undefined, '#7: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[4] === undefined');
