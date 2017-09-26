// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: ToNumeric type coercion tests via unary minus
info: >
  ToNumeric ( value )

  1. Let primValue be ? ToPrimitive(value, hint Number).
  2. If Type(primValue) is BigInt, return primValue.
  3. Return ToNumber(primValue).

features: [BigInt, Symbol, Symbol.toPrimitive]
includes: [typeCoercion.js]
---*/

// Sanity check our basic assumptions before starting the test.
assert.notSameValue(0, 0n);
assert.notSameValue(0, -0);
assert.sameValue(0n, -0n);

testCoercibleToNumericNumberZero(function(numberZero) {
  assert.sameValue(-numberZero, -0);
});

testCoercibleToNumericNumberOne(function(numberOne) {
  assert.sameValue(-numberOne, -1);
});

testCoercibleToNumericFromBigInt(0n, function(bigintZero) {
  assert.sameValue(-bigintZero, 0n);
});

testCoercibleToNumericFromBigInt(1n, function(bigintOne) {
  assert.sameValue(-bigintOne, -1n);
});

testNotCoercibleToNumeric(function(error, value) {
  assert.throws(error, function() { return -value; });
});
