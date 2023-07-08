// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Evaluate the production ArrayLiteral: [ Elision, AssignmentExpression ]"
es5id: 11.1.4_A1.4
description: >
    Checking various properteis and content of the array defined with
    "var array = [,,,1,2]"
---*/

var array = [,,,1,2];

//CHECK#1
if (typeof array !== "object") {
  throw new Test262Error('#1: var array = [,,,1,2]; typeof array === "object". Actual: ' + (typeof array));
}

//CHECK#2
if (array instanceof Array !== true) {
  throw new Test262Error('#2: var array = [,,,1,2]; array instanceof Array === true');
}

//CHECK#3
assert.sameValue(array.toString, Array.prototype.toString, '#3: var array = [,,,1,2]; array.toString === Array.prototype.toString');

//CHECK#4
assert.sameValue(array.length, 5, '#4: var array = [,,,1,2]; array.length === 5');

//CHECK#5
assert.sameValue(array[0], undefined, '#5: var array = [,,,1,2]; array[0] === undefined');

//CHECK#6
assert.sameValue(array[1], undefined, '#6: var array = [,,,1,2]; array[1] === undefined');

//CHECK#7
assert.sameValue(array[2], undefined, '#7: var array = [,,,1,2]; array[2] === undefined');

//CHECK#8
assert.sameValue(array[3], 1, '#8: var array = [,,,1,2]; array[3] === 1');

//CHECK#9
assert.sameValue(array[4], 2, '#9: var array = [,,,1,2]; array[4] === 2');
