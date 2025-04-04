// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x-- returns x = ToNumber(x) - 1
es5id: 11.3.2_A3_T4
description: Type(x) is undefined or null
---*/

//CHECK#1
var x;
x--;
assert.sameValue(isNaN(x), true, '#1: var x; x--; x === Not-a-Number');

//CHECK#2
var x = null;
x--;
assert.sameValue(x, -1, '#2: var x = null; x--; x === -1');
