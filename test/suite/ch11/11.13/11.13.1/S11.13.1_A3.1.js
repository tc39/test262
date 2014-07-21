// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x = y PutValue(x, y)
description: Checking Expression and Variable statements
---*/

//CHECK#1
var x = 1;
if (x !== 1) {
  $ERROR('#1: var x = 1; x === 1. Actual: ' + (x));
}

//CHECK#2
y = 1;
if (y !== 1) {
  $ERROR('#2: y = 1; y === 1. Actual: ' + (y));
}
