// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x <<= y is the same as x = x << y
es5id: 11.13.2_A4.6_T2.4
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and Undefined
---*/

var x;

//CHECK#1
x = 1;
x <<= undefined;
assert.sameValue(x, 1, '#1: x = 1; x <<= undefined; x === 1');

//CHECK#2
x = undefined;
x <<= 1;
assert.sameValue(x, 0, '#2: x = undefined; x <<= 1; x === 0');

//CHECK#3
x = new Number(1);
x <<= undefined;
assert.sameValue(x, 1, '#3: x = new Number(1); x <<= undefined; x === 1');

//CHECK#4
x = undefined;
x <<= new Number(1);
assert.sameValue(x, 0, '#4: x = undefined; x <<= new Number(1); x === 0');
