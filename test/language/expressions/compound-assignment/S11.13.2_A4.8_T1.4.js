// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x >>>= y is the same as x = x >>> y
es5id: 11.13.2_A4.8_T1.4
description: Type(x) and Type(y) vary between Null and Undefined
---*/

var x;

//CHECK#1
x = null;
x >>>= undefined;
assert.sameValue(x, 0, '#1: x = null; x >>>= undefined; x === 0');

//CHECK#2
x = undefined;
x >>>= null;
assert.sameValue(x, 0, '#2: x = undefined; x >>>= null; x === 0');

//CHECK#3
x = undefined;
x >>>= undefined;
assert.sameValue(x, 0, '#3: x = undefined; x >>>= undefined; x === 0');

//CHECK#4
x = null;
x >>>= null;
assert.sameValue(x, 0, '#4: x = null; x >>>= null; x === 0');
