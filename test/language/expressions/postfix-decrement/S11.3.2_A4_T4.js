// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x-- returns ToNumber(x)
es5id: 11.3.2_A4_T4
description: If Type(x) is undefined or null
---*/

//CHECK#1
var x;
var y = x--;
assert.sameValue(isNaN(y), true, '#1: var x; var y = x--; y === Not-a-Number');

//CHECK#2
var x = null;
var y = x--;
assert.sameValue(y, 0, '#2: var x = null; var y = x--; y === 0');
