// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    MemberExpression calls ToObject(MemberExpression) and
    ToString(Expression). CallExpression calls ToObject(CallExpression) and
    ToString(Expression)
es5id: 11.2.1_A3_T1
description: Checking Boolean case
---*/

//CHECK#1
assert.sameValue(true.toString(), "true", '#1: true.toString() === "true"');

//CHECK#2
assert.sameValue(false["toString"](), "false", '#2: false["toString"]() === "false"');

//CHECK#3
if (new Boolean(true).toString() !== "true") {
  throw new Test262Error('#3: new Boolean(true).toString() === "true". Actual: ' + (new Boolean(true).toString()));
}

//CHECK#4
if (new Boolean(false)["toString"]() !== "false") {
  throw new Test262Error('#4: new Boolean(false)["toString"]() === "false". Actual: ' + (new Boolean(false)["toString"]()));
}
