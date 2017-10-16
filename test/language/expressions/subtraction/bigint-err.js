// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-subtraction-operator-minus-runtime-semantics-evaluation
description: BigInt subtraction type errors
info: >
  The Subtraction Operator ( - )

  Runtime Semantics: Evaluation

  ...
  5. Let lnum be ? ToNumeric(lval).
  6. Let rnum be ? ToNumeric(rval).
  7. If Type(lnum) does not equal Type(rnum), throw a TypeError
  exception.
  ...
includes: [typeCoercion.js]
features: [BigInt, Symbol, Symbol.toPrimitive, arrow-function]
---*/

testNotCoercibleToBigIntOperand(function (error, value1) {
  testCoercibleToBigIntOperand(0n, function (value2) {
    assert.throws(error, () => value1 - value2);
    assert.throws(error, () => value2 - value1);
  });
});
