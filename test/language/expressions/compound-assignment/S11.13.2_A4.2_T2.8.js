// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x /= y is the same as x = x / y
es5id: 11.13.2_A4.2_T2.8
description: >
    Type(x) is different from Type(y) and both types vary between
    Boolean (primitive or object) and Undefined
---*/

var x;

//CHECK#1
x = true;
x /= undefined;
assert.sameValue(isNaN(x), true, '#1: x = true; x /= undefined; x === Not-a-Number');

//CHECK#2
x = undefined;
x /= true;
assert.sameValue(isNaN(x), true, '#2: x = undefined; x /= true; x === Not-a-Number');

//CHECK#3
x = new Boolean(true);
x /= undefined;
assert.sameValue(isNaN(x), true, '#3: x = new Boolean(true); x /= undefined; x === Not-a-Number');

//CHECK#4
x = undefined;
x /= new Boolean(true);
assert.sameValue(isNaN(x), true, '#4: x = undefined; x /= new Boolean(true); x === Not-a-Number');
