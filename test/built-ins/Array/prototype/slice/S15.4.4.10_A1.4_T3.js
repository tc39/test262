// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If start is negative, use max(start + length, 0).
    If end is negative, use max(end + length, 0)
esid: sec-array.prototype.slice
es5id: 15.4.4.10_A1.4_T3
description: start < -length < end < 0
---*/

var x = [0,1,2,3,4];
var arr = x.slice(-9,-1);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(-9,-1); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 4) {
  $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(-9,-1); arr.length === 4. Actual: ' + (arr.length));
}

//CHECK#3
if (arr[0] !== 0) {
  $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(-9,-1); arr[0] === 0. Actual: ' + (arr[0]));
}

//CHECK#4
if (arr[1] !== 1) {
  $ERROR('#4: var x = [0,1,2,3,4]; var arr = x.slice(-9,-1); arr[1] === 1. Actual: ' + (arr[1]));
}

//CHECK#5
if (arr[2] !== 2) {
  $ERROR('#5: var x = [0,1,2,3,4]; var arr = x.slice(-9,-1); arr[2] === 2. Actual: ' + (arr[2]));
}

//CHECK#6
if (arr[3] !== 3) {
  $ERROR('#6: var x = [0,1,2,3,4]; var arr = x.slice(-9,-1); arr[3] === 3. Actual: ' + (arr[3]));
}

//CHECK#7
if (arr[4] !== undefined) {
  $ERROR('#7: var x = [0,1,2,3,4]; var arr = x.slice(-9,-1); arr[4] === undefined. Actual: ' + (arr[4]));
}
