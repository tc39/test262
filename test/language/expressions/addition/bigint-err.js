// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-addition-operator-plus-runtime-semantics-evaluation
description: BigInt addition type errors
info: >
  The Addition Operator ( + )

  Runtime Semantics: Evaluation

  ...
  5. Let lprim be ? ToPrimitive(lval).
  6. Let rprim be ? ToPrimitive(rval).
  ...
  8. Let lnum be ? ToNumeric(lprim).
  9. Let rnum be ? ToNumeric(rprim).
  10. If Type(lnum) does not equal Type(rnum), throw a TypeError
  exception.
includes: [typeCoercion.js]
features: [BigInt, Symbol, Symbol.toPrimitive, arrow-functions]
---*/

testNotCoercibleToBigIntAdditionOperand(function (error, value1) {
  testCoercibleToBigIntOperand(0n, function (value2) {
    assert.throws(error, () => value1 + value2);
    assert.throws(error, () => value2 + value1);
  });
});
