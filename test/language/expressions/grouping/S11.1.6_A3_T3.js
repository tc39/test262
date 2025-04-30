// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "\"This\" operator only evaluates Expression"
es5id: 11.1.6_A3_T3
description: Applying grouping operator to String
---*/

//Check for String

//CHECK#1
assert.sameValue(("1"), "1", '#1: ("1") === "1"');

//CHECK#2
assert.sameValue(("x"), "x", '#2: ("x") === "x"');

//CHECK#3
var x = new Number("1");
assert.sameValue((x), x, '#3: var x = new Number("1"); (x) === x');
