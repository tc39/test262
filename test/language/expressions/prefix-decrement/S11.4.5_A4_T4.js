// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator --x returns ToNumber(x) - 1
es5id: 11.4.5_A4_T4
description: Type(x) is undefined or null
---*/

//CHECK#1
var x;
assert.sameValue(isNaN(--x), true, '#1: var x; --x; x === Not-a-Number');

//CHECK#2
var x = null;
assert.sameValue(--x, -1, '#2: var x = null; --x === -1');
