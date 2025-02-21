// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator -x returns -ToNumber(x)
es5id: 11.4.7_A3_T3
description: Type(x) is string primitive or String object
---*/

//CHECK#1
assert.sameValue(-"1", -1, '#1: -"1" === -1');

//CHECK#2
assert.sameValue(isNaN(-"x"), true, '#2: -"x" === Not-a-Number');

//CHECK#3
if (-new String("-1") !== 1) {
  throw new Test262Error('#3: -new String("-1") === 1. Actual: ' + (-new String("-1")));
}
