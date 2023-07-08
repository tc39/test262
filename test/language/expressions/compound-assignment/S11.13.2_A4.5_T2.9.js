// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x -= y is the same as x = x - y
es5id: 11.13.2_A4.5_T2.9
description: >
    Type(x) is different from Type(y) and both types vary between
    Boolean (primitive or object) and Null
---*/

var x;

//CHECK#1
x = true;
x -= null;
assert.sameValue(x, 1, '#1: x = true; x -= null; x === 1');

//CHECK#2
x = null;
x -= true;
assert.sameValue(x, -1, '#2: x = null; x -= true; x === -1');

//CHECK#3
x = new Boolean(true);
x -= null;
assert.sameValue(x, 1, '#3: x = new Boolean(true); x -= null; x === 1');

//CHECK#4
x = null;
x -= new Boolean(true);
assert.sameValue(x, -1, '#4: x = null; x -= new Boolean(true); x === -1');
