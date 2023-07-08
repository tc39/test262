// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator ~x returns ~ToInt32(x)
es5id: 11.4.8_A3_T3
description: Type(x) is string primitive or String object
---*/

//CHECK#1
assert.sameValue(~"1", -2, '#1: ~"1" === -2');

//CHECK#2
if (~new String("0") !== -1) {
  throw new Test262Error('#2: ~new String("0") === -1. Actual: ' + (~new String("0")));
}

//CHECK#3
assert.sameValue(~"x", -1, '#3: ~"x" === -1');

//CHECK#4
assert.sameValue(~"", -1, '#4: ~"" === -1');

//CHECK#5
if (~new String("-2") !== 1) {
  throw new Test262Error('#5: ~new String("-2") === 1. Actual: ' + (~new String("-2")));
}
