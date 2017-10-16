// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-multiplicative-operators-runtime-semantics-evaluation
description: BigInt multiplication type errors
info: >
  Multiplicative Operators

  Runtime Semantics: Evaluation

  ...
  5. Let lnum be ? ToNumeric(leftValue).
  6. Let rnum be ? ToNumeric(rightValue).
  7. If Type(lnum) does not equal Type(rnum), throw a TypeError
  exception.
  ...
includes: [typeCoercion.js]
features: [BigInt, Symbol, Symbol.toPrimitive, arrow-functions]
---*/

testNotCoercibleToBigIntOperand(function (error, value1) {
  testCoercibleToBigIntOperand(0n, function (value2) {
    assert.throws(error, () => value1 * value2);
    assert.throws(error, () => value2 * value1);
  });
});
