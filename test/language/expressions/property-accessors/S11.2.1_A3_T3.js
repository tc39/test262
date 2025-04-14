// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    MemberExpression calls ToObject(MemberExpression) and
    ToString(Expression). CallExpression calls ToObject(CallExpression) and
    ToString(Expression)
es5id: 11.2.1_A3_T3
description: Checking String case;
---*/

//CHECK#1
assert.sameValue("abc123".charAt(5), "3", '#1: "abc123".charAt(5) === "3"');

//CHECK#2
assert.sameValue("abc123"["charAt"](0), "a", '#2: "abc123"["charAt"](0) === "a"');

//CHECK#3
assert.sameValue("abc123".length, 6, '#3: "abc123".length === 6');

//CHECK#4
assert.sameValue("abc123"["length"], 6, '#4: "abc123"["length"] === 6');

//CHECK#5
if (new String("abc123").length !== 6) {
  throw new Test262Error('#5: new String("abc123").length === 6. Actual: ' + (new String("abc123").length));
}

//CHECK#6
if (new String("abc123")["charAt"](2) !== "c") {
  throw new Test262Error('#6: new String("abc123")["charAt"](2) === "c". Actual: ' + (new String("abc123")["charAt"](2)));
}
