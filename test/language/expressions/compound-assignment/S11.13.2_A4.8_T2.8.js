// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x >>>= y is the same as x = x >>> y
es5id: 11.13.2_A4.8_T2.8
description: >
    Type(x) is different from Type(y) and both types vary between
    Boolean (primitive or object) and Undefined
---*/

var x;

//CHECK#1
x = true;
x >>>= undefined;
assert.sameValue(x, 1, '#1: x = true; x >>>= undefined; x === 1');

//CHECK#2
x = undefined;
x >>>= true;
assert.sameValue(x, 0, '#2: x = undefined; x >>>= true; x === 0');

//CHECK#3
x = new Boolean(true);
x >>>= undefined;
assert.sameValue(x, 1, '#3: x = new Boolean(true); x >>>= undefined; x === 1');

//CHECK#4
x = undefined;
x >>>= new Boolean(true);
assert.sameValue(x, 0, '#4: x = undefined; x >>>= new Boolean(true); x === 0');
