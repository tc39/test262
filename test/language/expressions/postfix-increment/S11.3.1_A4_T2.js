// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x++ returns ToNumber(x)
es5id: 11.3.1_A4_T2
description: Type(x) is number primitive or Number object
---*/

//CHECK#1
var x = -0.1;
var y = x++;
assert.sameValue(y, -0.1, '#1: var x = -0.1; var y = x++; y === -0.1');

//CHECK#2
var x = new Number(1.1);
var y = x++;
assert.sameValue(y, 1.1, '#2: var x = new Number(1.1); var y = x++; y === 1.1');
