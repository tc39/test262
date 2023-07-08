// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Create multi dimensional array
es5id: 11.1.4_A2
description: >
    Checking various properteis and contents of the arrya defined with
    "var array = [[1,2], [3], []]"
---*/

var array = [[1,2], [3], []];

//CHECK#1
if (typeof array !== "object") {
  throw new Test262Error('#1: var array = [[1,2], [3], []]; typeof array === "object". Actual: ' + (typeof array));
}

//CHECK#2
if (array instanceof Array !== true) {
  throw new Test262Error('#2: var array = [[1,2], [3], []]; array instanceof Array === true');
}

//CHECK#3
assert.sameValue(array.toString, Array.prototype.toString, '#3: var array = [[1,2], [3], []]; array.toString === Array.prototype.toString');

//CHECK#4
assert.sameValue(array.length, 3, '#4: var array = [[1,2], [3], []]; array.length === 3');

var subarray = array[0];

//CHECK#5
if (typeof subarray !== "object") {
  throw new Test262Error('#5: var array = [[1,2], [3], []]; var subarray = array[0]; typeof subarray === "object". Actual: ' + (typeof subarray));
}

//CHECK#6
if (subarray instanceof Array !== true) {
  throw new Test262Error('#6: var array = [[1,2], [3], []]; var subarray = array[0]; subarray instanceof Array === true');
}

//CHECK#7
assert.sameValue(subarray.toString, Array.prototype.toString, '#7: var array = [[1,2], [3], []]; var subarray = array[0]; subarray.toString === Array.prototype.toString');

//CHECK#8
assert.sameValue(subarray.length, 2, '#8: var array = [[1,2], [3], []]; var subarray = array[0]; subarray.length === 2');

//CHECK#9
assert.sameValue(subarray[0], 1, '#9: var array = [[1,2], [3], []]; var subarray = array[0]; subarray[0] === 1');

//CHECK#10
assert.sameValue(subarray[1], 2, '#10: var array = [[1,2], [3], []]; var subarray = array[1]; subarray[1] === 2');

var subarray = array[1];

//CHECK#11
if (typeof subarray !== "object") {
throw new Test262Error('#11: var array = [[1,2], [3], []]; var subarray = array[1]; typeof subarray === "object". Actual: ' + (typeof subarray));
}

//CHECK#12
if (subarray instanceof Array !== true) {
throw new Test262Error('#12: var array = [[1,2], [3], []]; var subarray = array[1]; subarray instanceof Array === true');
}

//CHECK#13
if (subarray.toString !== Array.prototype.toString) {
throw new Test262Error('#13: var array = [[1,2], [3], []]; var subarray = array[1]; subarray.toString === Array.prototype.toString. Actual: ' + (subarray.toString));
}

//CHECK#14
if (subarray.length !== 1) {
throw new Test262Error('#14: var array = [[1,2], [3], []]; var subarray = array[1]; subarray.length === 1. Actual: ' + (subarray.length));
}

//CHECK#15
if (subarray[0] !== 3) {
throw new Test262Error('#15: var array = [[1,2], [3], []]; var subarray = array[1]; subarray[0] === 3. Actual: ' + (subarray[0]));
}

var subarray = array[2];

//CHECK#16
if (typeof subarray !== "object") {
throw new Test262Error('#16: var array = [[1,2], [3], []]; var subarray = array[2]; typeof subarray === "object". Actual: ' + (typeof subarray));
}

//CHECK#17
if (subarray instanceof Array !== true) {
throw new Test262Error('#17: var array = [[1,2], [3], []]; var subarray = array[2]; subarray instanceof Array === true');
}

//CHECK#18
if (subarray.toString !== Array.prototype.toString) {
throw new Test262Error('#18: var array = [[1,2], [3], []]; var subarray = array[2]; subarray.toString === Array.prototype.toString. Actual: ' + (subarray.toString));
}

//CHECK#19
if (subarray.length !== 0) {
throw new Test262Error('#19: var array = [[1,2], [3], []]; var subarray = array[2]; subarray.length === 0. Actual: ' + (subarray.length));
}

//CHECK#20
assert.sameValue(array[0][0], 1, '#20: var array = [[1,2], [3], []]; array[0][0] === 1');

//CHECK#21
assert.sameValue(array[0][1], 2, '#21: var array = [[1,2], [3], []]; array[0][1] === 2');

//CHECK#22
assert.sameValue(array[1][0], 3, '#722: var array = [[1,2], [3], []]; array[1][0] === 3');
