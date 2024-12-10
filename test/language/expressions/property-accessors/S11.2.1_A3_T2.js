// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    MemberExpression calls ToObject(MemberExpression) and
    ToString(Expression). CallExpression calls ToObject(CallExpression) and
    ToString(Expression)
es5id: 11.2.1_A3_T2
description: Checking Number case
---*/

//CHECK#1
assert.sameValue(1..toString(), "1", '#1: 1..toString() === "1"');

//CHECK#2
assert.sameValue(1.1.toFixed(5), "1.10000", '#2: 1.1.toFixed(5) === "1.10000"');

//CHECK#3
assert.sameValue(1["toString"](), "1", '#3: 1["toString"]() === "1"');

//CHECK#4
assert.sameValue(1.["toFixed"](5), "1.00000", '#4: 1.["toFixed"](5) === "1.00000"');

//CHECK#5
if (new Number(1).toString() !== "1") {
  throw new Test262Error('#5: new Number(1).toString() === "1". Actual: ' + (new Number(1).toString()));
}

//CHECK#6
if (new Number(1)["toFixed"](5) !== "1.00000") {
  throw new Test262Error('#6: new Number(1)["toFixed"](5) === "1.00000". Actual: ' + (new Number(1)["toFixed"](5)));
}
