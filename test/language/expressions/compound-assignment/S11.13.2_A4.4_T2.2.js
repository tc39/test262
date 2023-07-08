// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x += y is the same as x = x + y
es5id: 11.13.2_A4.4_T2.2
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and Null
---*/

var x;

//CHECK#1
x = 1;
x += null;
assert.sameValue(x, 1, '#1: x = 1; x += null; x === 1');

//CHECK#2
x = null;
x += 1;
assert.sameValue(x, 1, '#2: x = null; x += 1; x === 1');

//CHECK#3
x = new Number(1);
x += null;
assert.sameValue(x, 1, '#3: x = new Number(1); x += null; x === 1');

//CHECK#4
x = null;
x += new Number(1);
assert.sameValue(x, 1, '#4: x = null; x += new Number(1); x === 1');
