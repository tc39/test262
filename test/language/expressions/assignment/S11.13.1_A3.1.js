// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x = y PutValue(x, y)
es5id: 11.13.1_A3.1
description: Checking Expression and Variable statements
---*/

//CHECK#1
var x = 1;
assert.sameValue(x, 1, '#1: var x = 1; x === 1');

//CHECK#2
x = 1;
assert.sameValue(x, 1, '#2: x = 1; x === 1');
