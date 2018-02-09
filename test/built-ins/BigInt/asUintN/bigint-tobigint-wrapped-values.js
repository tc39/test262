// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: BigInt.asUintN type coercion for bigint parameter
esid: pending
info: |
  BigInt.asUintN ( bits, bigint )

  2. Let bigint ? ToBigInt(bigint).
features: [BigInt, Symbol.toPrimitive, computed-property-names]
---*/

assert.sameValue(BigInt.asUintN(2, Object(0 n)), 0 n, "ToPrimitive: unbox object with internal slot");
assert.sameValue(BigInt.asUintN(2, {
  [Symbol.toPrimitive]: function() {
    return 0 n;
  }
}), 0 n, "ToPrimitive: @@toPrimitive");
assert.sameValue(BigInt.asUintN(2, {
  valueOf: function() {
    return 0 n;
  }
}), 0 n, "ToPrimitive: valueOf");
assert.sameValue(BigInt.asUintN(2, {
  toString: function() {
    return 0 n;
  }
}), 0 n, "ToPrimitive: toString");
assert.sameValue(BigInt.asUintN(2, Object(true)), 1 n,
  "ToBigInt: unbox object with internal slot => true => 1n");
assert.sameValue(BigInt.asUintN(2, {
  [Symbol.toPrimitive]: function() {
    return true;
  }
}), 1 n, "ToBigInt: @@toPrimitive => true => 1n");
assert.sameValue(BigInt.asUintN(2, {
  valueOf: function() {
    return true;
  }
}), 1 n, "ToBigInt: valueOf => true => 1n");
assert.sameValue(BigInt.asUintN(2, {
  toString: function() {
    return true;
  }
}), 1 n, "ToBigInt: toString => true => 1n");
assert.sameValue(BigInt.asUintN(2, Object("1")), 1 n,
  "ToBigInt: unbox object with internal slot => parse BigInt");
assert.sameValue(BigInt.asUintN(2, {
  [Symbol.toPrimitive]: function() {
    return "1";
  }
}), 1 n, "ToBigInt: @@toPrimitive => parse BigInt");
assert.sameValue(BigInt.asUintN(2, {
  valueOf: function() {
    return "1";
  }
}), 1 n, "ToBigInt: valueOf => parse BigInt");
assert.sameValue(BigInt.asUintN(2, {
  toString: function() {
    return "1";
  }
}), 1 n, "ToBigInt: toString => parse BigInt");
