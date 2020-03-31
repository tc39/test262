// Copyright (c) 2020 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: Logical And Assignment Operator
features: [BigInt]
info: |
    AssignmentExpression:
      LeftHandSideExpression &&= AssignmentExpression

    1. Let lref be the result of evaluating LeftHandSideExpression.
    2. Let lval be ? GetValue(lref).
    3. Let lbool be ! ToBoolean(lval).
    4. If lbool is false, return lval.
    5. Let rref be the result of evaluating AssignmentExpression.
    6. Let rval be ? GetValue(rref).
    7. Perform ? PutValue(lref, rval).
    8. Return rval.

---*/

var value = 0n;
assert.sameValue(value &&= 1n, "test", "(value &&= 1n) === 0n; where value = 0n");

var value = 2n;
assert.sameValue(value &&= 1n, "test", "(value &&= 1n) === 1n; where value = 2n");
