// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x |= y is the same as x = x | y
es5id: 11.13.2_A4.11_T1.1
description: >
    Type(x) and Type(y) vary between primitive boolean and Boolean
    object
---*/

var x;

//CHECK#1
x = true;
x |= true;
assert.sameValue(x, 1, '#1: x = true; x |= true; x === 1');

//CHECK#2
x = new Boolean(true);
x |= true;
assert.sameValue(x, 1, '#2: x = new Boolean(true); x |= true; x === 1');

//CHECK#3
x = true;
x |= new Boolean(true);
assert.sameValue(x, 1, '#3: x = true; x |= new Boolean(true); x === 1');

//CHECK#4
x = new Boolean(true);
x |= new Boolean(true);
assert.sameValue(x, 1, '#4: x = new Boolean(true); x |= new Boolean(true); x === 1');
