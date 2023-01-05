// Copyright (C) 2014 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator --x calls PutValue(lhs, newValue)
es5id: S11.4.5_A5_T2
description: >
    Evaluating LeftHandSideExpression lhs returns Reference type; Reference
    base value is an environment record and environment record kind is
    object environment record. PutValue(lhs, newValue) uses the initially
    created Reference even if the environment binding is no longer present.
    Binding in surrounding global environment record is not changed.
flags: [noStrict]
features: [with]
---*/

var x = 0;
var scope = {
  get x() {
    delete this.x;
    return 2;
  }
};

with (scope) {
  --x;
}

if (scope.x !== 1) {
  throw new Test262Error('#1: scope.x === 1. Actual: ' + (scope.x));
}
if (x !== 0) {
  throw new Test262Error('#2: x === 0. Actual: ' + (x));
}
