// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is not a string value, return x
es5id: 15.1.2.1_A1.1_T1
description: Checking all primitive
---*/

//CHECK#1
var x = 1;
assert.sameValue(eval(x), x, '#1: x = 1; eval(x) === x');

//CHECK#2
assert.sameValue(eval(1), 1, '#2: eval(1) === 1');

//CHECK#3
assert.sameValue(eval(true), true, '#3: eval(true) === true');

//CHECK#4
assert.sameValue(eval(null), null, '#4: eval(null) === null');

//CHECK#5
assert.sameValue(eval(undefined), undefined, '#5: eval(undefined) === undefined');
