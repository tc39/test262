// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Non-strict inequality comparison of BigInt and miscellaneous primitive values
esid: sec-equality-operators-runtime-semantics-evaluation
info: |
  EqualityExpression : EqualityExpression != RelationalExpression
    ...
    5. Return the result of performing Abstract Equality Comparison rval == lval.
    6. If r is true, return false. Otherwise, return true.

features: [BigInt, Symbol]
---*/

assert.sameValue(0n != undefined, true);
assert.sameValue(undefined != 0n, true);
assert.sameValue(1n != undefined, true);
assert.sameValue(undefined != 1n, true);
assert.sameValue(0n != null, true);
assert.sameValue(null != 0n, true);
assert.sameValue(1n != null, true);
assert.sameValue(null != 1n, true);
assert.sameValue(0n != Symbol("1"), true);
assert.sameValue(Symbol("1") != 0n, true);
assert.sameValue(1n != Symbol("1"), true);
assert.sameValue(Symbol("1") != 1n, true);
