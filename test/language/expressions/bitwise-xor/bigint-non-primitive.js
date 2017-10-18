// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Bitwise XOR for BigInt non-primitive values
esid: sec-binary-bitwise-operators-runtime-semantics-evaluation
info: |

  5. Let lnum be ? ToNumeric(lval).
  6. Let rnum be ? ToNumeric(rval).
  ...
  8. Let T be Type(lnum).
  ...
  11. Otherwise, @ is ^; return T::bitwiseXOR(lnum, rnum).

features: [BigInt]
---*/

assert.sameValue(Object(5n) ^ 3n, 6n, "Object(5n) ^ 3n === 6n");
assert.sameValue(3n ^ Object(5n), 6n, "3n ^ Object(5n) === 6n");
assert.sameValue(Object(5n) ^ Object(3n), 6n, "Object(5n) ^ Object(3n) === 6n");

function err() {
  throw new Test262Error();
}

assert.sameValue(
  {[Symbol.toPrimitive]: function() { return 5n; }, valueOf: err, toString: err} ^ 3n, 6n,
  "primitive from @@toPrimitive");
assert.sameValue(
  3n ^ {[Symbol.toPrimitive]: function() { return 5n; }, valueOf: err, toString: err}, 6n,
  "primitive from @@toPrimitive");
assert.sameValue(
  {valueOf: function() { return 5n; }, toString: err} ^ 3n, 6n,
  "primitive from {}.valueOf");
assert.sameValue(
  3n ^ {valueOf: function() { return 5n; }, toString: err}, 6n,
  "primitive from {}.valueOf");
assert.sameValue(
  {toString: function() { return 5n; }} ^ 3n, 6n,
  "primitive from {}.toString");
assert.sameValue(
  3n ^ {toString: function() { return 5n; }}, 6n,
  "primitive from {}.toString");
