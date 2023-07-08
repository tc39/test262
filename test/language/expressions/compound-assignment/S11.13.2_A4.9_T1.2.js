// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x &= y is the same as x = x & y
es5id: 11.13.2_A4.9_T1.2
description: Type(x) and Type(y) vary between primitive number and Number object
---*/

var x;

//CHECK#1
x = 1;
x &= 1;
assert.sameValue(x, 1, '#1: x = 1; x &= 1; x === 1');

//CHECK#2
x = new Number(1);
x &= 1;
assert.sameValue(x, 1, '#2: x = new Number(1); x &= 1; x === 1');

//CHECK#3
x = 1;
x &= new Number(1);
assert.sameValue(x, 1, '#3: x = 1; x &= new Number(1); x === 1');

//CHECK#4
x = new Number(1);
x &= new Number(1);
assert.sameValue(x, 1, '#4: x = new Number(1); x &= new Number(1); x === 1');
