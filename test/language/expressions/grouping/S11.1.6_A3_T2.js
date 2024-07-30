// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "\"This\" operator only evaluates Expression"
es5id: 11.1.6_A3_T2
description: Applying grouping operator to Number
---*/

//Check for Number

//CHECK#1
assert.sameValue((1), 1, '#1: (1) === 1');

//CHECK#2
var x = new Number(1);
assert.sameValue((x), x, '#2: var x = new Number(1); (x) === x');
