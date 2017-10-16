// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-exp-operator-runtime-semantics-evaluation
description: BigInt exponentiation type errors
info: >
  Exponentiation Operator

  Runtime Semantics: Evaluation

  ...
  5. Let base be ? ToNumeric(leftValue).
  6. Let exponent be ? ToNumeric(rightValue).
  7. If Type(lnum) does not equal Type(rnum), throw a TypeError
  exception.
  ...
includes: [typeCoercion.js]
features: [BigInt, Symbol, Symbol.toPrimitive, arrow-function]
---*/

testNotCoercibleToBigIntOperand(function (error, value1) {
  testCoercibleToBigIntOperand(1n, function (value2) {
    assert.throws(error, () => value1 ** value2);
    assert.throws(error, () => value2 ** value1);
  });
});
