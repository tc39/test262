// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x++ returns ToNumber(x)
es5id: 11.3.1_A4_T1
description: Type(x) is boolean primitive or Boolean object
---*/

//CHECK#1
var x = false;
var y = x++;
assert.sameValue(y, 0, '#1: var x = false; var y = x++; y === 0');

//CHECK#2
var x = new Boolean(true);
var y = x++;
assert.sameValue(y, 1, '#2: var x = new Boolean(true); var y = x++; y === 1');
