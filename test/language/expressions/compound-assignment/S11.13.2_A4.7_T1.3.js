// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x >>= y is the same as x = x >> y
es5id: 11.13.2_A4.7_T1.3
description: Type(x) and Type(y) vary between primitive string and String object
---*/

var x;

//CHECK#1
x = "1";
x >>= "1";
assert.sameValue(x, 0, '#1: x = "1"; x >>= "1"; x === 0');

//CHECK#2
x = new String("1");
x >>= "1";
assert.sameValue(x, 0, '#2: x = new String("1"); x >>= "1"; x === 0');

//CHECK#3
x = "1";
x >>= new String("1");
assert.sameValue(x, 0, '#3: x = "1"; x >>= new String("1"); x === 0');

//CHECK#4
x = new String("1");
x >>= new String("1");
assert.sameValue(x, 0, '#4: x = new String("1"); x >>= new String("1"); x === 0');

//CHECK#5
x = "x";
x >>= "1";
assert.sameValue(x, 0, '#5: x = "x"; x >>= "1"; x === 0');

//CHECK#6
x = "1";
x >>= "x";
assert.sameValue(x, 1, '#6: x = "1"; x >>= "x"; x === 1');
