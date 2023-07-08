// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x @= y uses PutValue(x, x @ y)
es5id: 11.13.2_A3.1_T7
description: Checking Expression and Variable statements for x >>= y
---*/

//CHECK#1
var x = 4;
x >>= 1;
assert.sameValue(x, 2, '#1: var x = 4; x >>= 1; x === 2');

//CHECK#2
var y;
y = 4;
y >>= 1;
assert.sameValue(y, 2, '#2: y = 4; y >>= 1; y === 2');
