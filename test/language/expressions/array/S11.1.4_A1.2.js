// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Evaluate the production ArrayLiteral: [ Elision ]"
es5id: 11.1.4_A1.2
description: >
    Checking various properties the array defined with "var array =
    [,,,,,]"
---*/

var array = [,,,,,];

//CHECK#1
if (typeof array !== "object") {
  throw new Test262Error('#1: var array = [,,,,,]; typeof array === "object". Actual: ' + (typeof array));
}

//CHECK#2
if (array instanceof Array !== true) {
  throw new Test262Error('#2: var array = [,,,,,]; array instanceof Array === true');
}

//CHECK#3
assert.sameValue(array.toString, Array.prototype.toString, '#3: var array = [,,,,,]; array.toString === Array.prototype.toString');

//CHECK#4
assert.sameValue(array.length, 5, '#4: var array = [,,,,,]; array.length === 5');
