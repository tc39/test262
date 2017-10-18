// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Bitwise AND for BigInt non-primitive values
esid: sec-binary-bitwise-operators-runtime-semantics-evaluation
info: |

  5. Let lnum be ? ToNumeric(lval).
  6. Let rnum be ? ToNumeric(rval).
  ...
  8. Let T be Type(lnum).
  9. If @ is &, return T::bitwiseAND(lnum, rnum).

features: [BigInt]
---*/

assert.sameValue(Object(5n) & 3n, 1n, "Object(5n) & 3n === 1n");
assert.sameValue(3n & Object(5n), 1n, "3n & Object(5n) === 1n");
assert.sameValue(Object(5n) & Object(3n), 1n, "Object(5n) & Object(3n) === 1n");

function err() {
  throw new Test262Error();
}

assert.sameValue(
  {[Symbol.toPrimitive]: function() { return 5n; }, valueOf: err, toString: err} & 3n, 1n,
  "primitive from @@toPrimitive");
assert.sameValue(
  3n & {[Symbol.toPrimitive]: function() { return 5n; }, valueOf: err, toString: err}, 1n,
  "primitive from @@toPrimitive");
assert.sameValue(
  {valueOf: function() { return 5n; }, toString: err} & 3n, 1n,
  "primitive from {}.valueOf");
assert.sameValue(
  3n & {valueOf: function() { return 5n; }, toString: err}, 1n,
  "primitive from {}.valueOf");
assert.sameValue(
  {toString: function() { return 5n; }} & 3n, 1n,
  "primitive from {}.toString");
assert.sameValue(
  3n & {toString: function() { return 5n; }}, 1n,
  "primitive from {}.toString");
