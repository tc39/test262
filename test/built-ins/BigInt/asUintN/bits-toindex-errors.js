// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: BigInt.asUintN type coercion for bits parameter
esid: pending
info: |
  BigInt.asUintN ( bits, bigint )

  1. Let bits be ? ToIndex(bits).
features: [BigInt, Symbol, Symbol.toPrimitive, computed-property-names]
---*/

assert.throws(RangeError, function() {
  BigInt.asUintN(-1, 0 n);
}, "ToIndex: throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asUintN(-2.5, 0 n);
}, "ToIndex: throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asUintN("-2.5", 0 n);
}, "ToIndex: parse Number => throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asUintN(-Infinity, 0 n);
}, "ToIndex: throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asUintN(9007199254740992, 0 n);
}, "ToIndex: throw when integerIndex > 2**53-1");
assert.throws(RangeError, function() {
  BigInt.asUintN(Infinity, 0 n);
}, "ToIndex: throw when integerIndex > 2**53-1");
assert.throws(TypeError, function() {
  BigInt.asUintN(0 n, 0 n);
}, "ToIndex: BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN(Object(0 n), 0 n);
}, "ToIndex: unbox object with internal slot => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    [Symbol.toPrimitive]: function() {
      return 0 n;
    }
  }, 0 n);
}, "ToIndex: @@toPrimitive => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    valueOf: function() {
      return 0 n;
    }
  }, 0 n);
}, "ToIndex: valueOf => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    toString: function() {
      return 0 n;
    }
  }, 0 n);
}, "ToIndex: toString => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN(Symbol("1"), 0 n);
}, "ToIndex: Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN(Object(Symbol("1")), 0 n);
}, "ToIndex: unbox object with internal slot => Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    [Symbol.toPrimitive]: function() {
      return Symbol("1");
    }
  }, 0 n);
}, "ToIndex: @@toPrimitive => Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    valueOf: function() {
      return Symbol("1");
    }
  }, 0 n);
}, "ToIndex: valueOf => Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asUintN({
    toString: function() {
      return Symbol("1");
    }
  }, 0 n);
}, "ToIndex: toString => Symbol => TypeError");
