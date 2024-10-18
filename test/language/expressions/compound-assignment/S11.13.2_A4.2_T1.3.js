// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x /= y is the same as x = x / y
es5id: 11.13.2_A4.2_T1.3
description: Type(x) and Type(y) vary between primitive string and String object
---*/

var x;

//CHECK#1
x = "1";
x /= "1";
assert.sameValue(x, 1, '#1: x = "1"; x /= "1"; x === 1');

//CHECK#2
x = new String("1");
x /= "1";
assert.sameValue(x, 1, '#2: x = new String("1"); x /= "1"; x === 1');

//CHECK#3
x = "1";
x /= new String("1");
assert.sameValue(x, 1, '#3: x = "1"; x /= new String("1"); x === 1');

//CHECK#4
x = new String("1");
x /= new String("1");
assert.sameValue(x, 1, '#4: x = new String("1"); x /= new String("1"); x === 1');

//CHECK#5
x = "x";
x /= "1";
assert.sameValue(isNaN(x), true, '#5: x = "x"; x /= "1"; x === Not-a-Number');

//CHECK#6
x = "1";
x /= "x";
assert.sameValue(isNaN(x), true, '#6: x = "1"; x /= "x"; x === Not-a-Number');
