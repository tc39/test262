// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x @= y uses PutValue(x, x @ y)
es5id: 11.13.2_A3.1_T3
description: Checking Expression and Variable statements for x %= y
---*/

//CHECK#1
var x = -1;
x %= 2;
assert.sameValue(x, -1, '#1: var x = -1; x %= 2; x === -1');

//CHECK#2
var y;
y = -1;
y %= 2;
assert.sameValue(y, -1, '#2: y = -1; y %= 2; y === -1');
