// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Evaluate the production ArrayLiteral: [ AssignmentExpression ]"
es5id: 11.1.4_A1.3
description: >
    Checking various properteis and contents of the array defined with
    "var array = [1,2,3,4,5]"
---*/

var array = [1,2,3,4,5];

//CHECK#1
if (typeof array !== "object") {
  throw new Test262Error('#1: var array = [1,2,3,4,5]; typeof array === "object". Actual: ' + (typeof array));
}

//CHECK#2
if (array instanceof Array !== true) {
  throw new Test262Error('#2: var array = [1,2,3,4,5]; array instanceof Array === true');
}

//CHECK#3
assert.sameValue(array.toString, Array.prototype.toString, '#3: var array = [1,2,3,4,5]; array.toString === Array.prototype.toString');

//CHECK#4
assert.sameValue(array.length, 5, '#4: var array = [1,2,3,4,5]; array.length === 5');

//CHECK#5
assert.sameValue(array[0], 1, '#5: var array = [1,2,3,4,5]; array[0] === 1');

//CHECK#6
assert.sameValue(array[1], 2, '#6: var array = [1,2,3,4,5]; array[1] === 2');

//CHECK#7
assert.sameValue(array[2], 3, '#7: var array = [1,2,3,4,5]; array[2] === 3');

//CHECK#8
assert.sameValue(array[3], 4, '#8: var array = [1,2,3,4,5]; array[3] === 4');

//CHECK#9
assert.sameValue(array[4], 5, '#9: var array = [1,2,3,4,5]; array[4] === 5');
