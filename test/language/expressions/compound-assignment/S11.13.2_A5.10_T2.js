// Copyright (C) 2014 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Compound Assignment Operator calls PutValue(lref, v)
es5id: S11.13.2_A5.10_T2
description: >
    Evaluating LeftHandSideExpression lref returns Reference type; Reference
    base value is an environment record and environment record kind is
    object environment record. PutValue(lref, v) uses the initially
    created Reference even if the environment binding is no longer present.
    Binding in surrounding global environment record is not changed.
    Check operator is "x ^= y".
flags: [noStrict]
---*/

var x = 0;
var scope = {
  get x() {
    delete this.x;
    return 2;
  }
};

with (scope) {
  x ^= 3;
}

assert.sameValue(scope.x, 1, '#1: scope.x === 1');
assert.sameValue(x, 0, '#2: x === 0');
