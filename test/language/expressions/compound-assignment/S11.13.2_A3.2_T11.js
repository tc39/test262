// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x @= y returns x @ y
es5id: 11.13.2_A3.2_T11
description: Checking Expression and Variable statements for x |= y
---*/

//CHECK#1
var x = 0;
var x1 = (x |= 1);
assert.sameValue(x1, 1, '#1: var x = 0; var x1 = (x |= 1); x1 === 1');

//CHECK#2
var y;
var y1;
y = 1;
y1 = (y |= 0);
assert.sameValue(y1, 1, '#2: y = 1; y1 = (y |= 0); y1 === 1');
