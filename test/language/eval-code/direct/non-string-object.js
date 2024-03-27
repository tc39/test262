// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is not a string value, return x
es5id: 15.1.2.1_A1.1_T2
description: Checking all object
---*/

//CHECK#1
var x = {};
assert.sameValue(eval(x), x, '#1: x = {}; eval(x) === x');

//CHECK#2
x = new Number(1);
assert.sameValue(eval(x), x, '#2: x = new Number(1); eval(x) === x');

//CHECK#3
x = new Boolean(true);
assert.sameValue(eval(x), x, '#3: x = new Boolean(true); eval(x) === x');

//CHECK#4
x = new String("1+1");
assert.sameValue(eval(x), x, '#4: x = new String("1"); eval(x) === x');
