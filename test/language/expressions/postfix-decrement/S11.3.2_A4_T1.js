// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x-- returns ToNumber(x)
es5id: 11.3.2_A4_T1
description: Type(x) is boolean primitive or Boolean object
---*/

//CHECK#1
var x = true;
var y = x--;
assert.sameValue(y, 1, '#1: var x = true; var y = x--; y === 1');

//CHECK#2
var x = new Boolean(false);
var y = x--;
assert.sameValue(y, 0, '#2: var x = new Boolean(false); var y = x--; y === 0');
