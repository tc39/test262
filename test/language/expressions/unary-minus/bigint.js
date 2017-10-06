// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Unary minus for BigInt values
esid: sec-numeric-types-bigint-unaryMinus
info: |
  BigInt::unaryMinus (x)

  The abstract operation BigInt::unaryMinus with an argument x of BigInt type returns the result of negating x.

  Note: There is only one 0n value; -0n is the same as 0n.


  sec-unary-minus-operator-runtime-semantics-evaluation
  Runtime Semantics: Evaluation
  UnaryExpression : - UnaryExpression

  1. Let expr be the result of evaluating UnaryExpression.
  2. Let oldValue be ? ToNumeric(? GetValue(expr)).
  3. Let T be Type(oldValue).
  4. Return ? T::unaryMinus(oldValue).

features: [BigInt]
---*/

assert.sameValue(-0n, 0n, "-0n === 0n");
assert.sameValue(-(0n), 0n, "-(0n) === 0n");
assert.notSameValue(-1n, 1n, "-1n !== 1n");
assert.sameValue(-(1n), -1n, "-(1n) === -1n");
assert.notSameValue(-(1n), 1n, "-(1n) !== 1n");
assert.sameValue(-(-1n), 1n, "-(-1n) === 1n");
assert.notSameValue(-(-1n), -1n, "-(-1n) !== -1n");
assert.sameValue(- - 1n, 1n, "- - 1n === 1n");
assert.notSameValue(- - 1n, -1n, "- - 1n !== -1n");
assert.sameValue(-(0x1fffffffffffff01n), -0x1fffffffffffff01n, "-(0x1fffffffffffff01n) === -0x1fffffffffffff01n");
assert.notSameValue(-(0x1fffffffffffff01n), 0x1fffffffffffff01n, "-(0x1fffffffffffff01n) !== 0x1fffffffffffff01n");
assert.notSameValue(-(0x1fffffffffffff01n), -0x1fffffffffffff00n, "-(0x1fffffffffffff01n) !== -0x1fffffffffffff00n");
assert.sameValue(-Object(1n), -1n, "-Object(1n) === -1n");
assert.notSameValue(-Object(1n), 1n, "-Object(1n) !== 1n");
assert.sameValue(-{valueOf: function() { return 1n; }}, -1n, "-{valueOf: function() { return 1n; }} === -1n");
assert.notSameValue(-{valueOf: function() { return 1n; }}, 1n, "-{valueOf: function() { return 1n; }} !== 1n");
