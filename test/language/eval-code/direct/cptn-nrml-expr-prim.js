// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If Result(3).type is normal and its completion value is a value V,
    then return the value V
es5id: 15.1.2.1_A3.1_T1
description: Expression statement. Eval return primitive value
---*/

var x;
//CHECK#1
if (eval("x = 1") !== 1) {
  throw new Test262Error('#1: eval("x = 1") === 1. Actual: ' + (eval("x = 1")));
}

//CHECK#2
assert.sameValue(eval("1"), 1, '#2: eval("1") === 1');

//CHECK#3
assert.sameValue(eval("'1'"), '1', '#3: eval("\'1\'") === \'1\'');

//CHECK#4
x = 1;
assert.sameValue(eval("++x"), 2, '#4: x = 1; eval("++x") === 2');
