// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x <<= y is the same as x = x << y
es5id: 11.13.2_A4.6_T2.1
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and Boolean (primitive and object)
---*/

var x;

//CHECK#1
x = true;
x <<= 1;
assert.sameValue(x, 2, '#1: x = true; x <<= 1; x === 2');

//CHECK#2
x = 1;
x <<= true;
assert.sameValue(x, 2, '#2: x = 1; x <<= true; x === 2');

//CHECK#3
x = new Boolean(true);
x <<= 1;
assert.sameValue(x, 2, '#3: x = new Boolean(true); x <<= 1; x === 2');

//CHECK#4
x = 1;
x <<= new Boolean(true);
assert.sameValue(x, 2, '#4: x = 1; x <<= new Boolean(true); x === 2');

//CHECK#5
x = true;
x <<= new Number(1);
assert.sameValue(x, 2, '#5: x = true; x <<= new Number(1); x === 2');

//CHECK#6
x = new Number(1);
x <<= true;
assert.sameValue(x, 2, '#6: x = new Number(1); x <<= true; x === 2');

//CHECK#7
x = new Boolean(true);
x <<= new Number(1);
assert.sameValue(x, 2, '#7: x = new Boolean(true); x <<= new Number(1); x === 2');

//CHECK#8
x = new Number(1);
x <<= new Boolean(true);
assert.sameValue(x, 2, '#8: x = new Number(1); x <<= new Boolean(true); x === 2');
