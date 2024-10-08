// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Comma Operator evaluates all Expressions and returns the last of them
es5id: 11.14_A3
description: Checking with "="
---*/

//CHECK#1
var x = 0;
var y = 0;
var z = 0;
if ((x = 1, y = 2, z = 3) !== 3) {
  throw new Test262Error('#1: var x = 0; var y = 0; var z = 0; (x = 1, y = 2, z = 3) === 3. Actual: ' + ((x = 1, y = 2, z = 3)));
}

var x = 0;
var y = 0;
var z = 0;
x = 1, y = 2, z = 3;

//CHECK#2
assert.sameValue(x, 1, '#2: var x = 0; var y = 0; var z = 0; x = 1, y = 2, z = 3; x === 1');

//CHECK#3
assert.sameValue(y, 2, '#3: var x = 0; var y = 0; var z = 0; x = 1, y = 2, z = 3; y === 2');

//CHECK#4
assert.sameValue(z, 3, '#4: var x = 0; var y = 0; var z = 0; x = 1, y = 2, z = 3; z === 3');
