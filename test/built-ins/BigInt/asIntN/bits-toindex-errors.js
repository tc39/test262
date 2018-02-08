// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: BigInt.asIntN type coercion for bits parameter
esid: pending
info: |
  BigInt.asIntN ( bits, bigint )

  1. Let bits be ? ToIndex(bits).
features: [BigInt, Symbol, Symbol.toPrimitive, computed-property-names]
---*/

assert.throws(RangeError, function() {
  BigInt.asIntN(-1, 0 n);
}, "ToIndex: throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asIntN(-2.5, 0 n);
}, "ToIndex: throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asIntN("-2.5", 0 n);
}, "ToIndex: parse Number => throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asIntN(-Infinity, 0 n);
}, "ToIndex: throw when integerIndex < 0");
assert.throws(RangeError, function() {
  BigInt.asIntN(9007199254740992, 0 n);
}, "ToIndex: throw when integerIndex > 2**53-1");
assert.throws(RangeError, function() {
  BigInt.asIntN(Infinity, 0 n);
}, "ToIndex: throw when integerIndex > 2**53-1");
assert.throws(TypeError, function() {
  BigInt.asIntN(0 n, 0 n);
}, "ToIndex: BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asIntN(Object(0 n), 0 n);
}, "ToIndex: unbox object with internal slot => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asIntN({
    [Symbol.toPrimitive]: function() {
      return 0 n;
    }
  }, 0 n);
}, "ToIndex: @@toPrimitive => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asIntN({
    valueOf: function() {
      return 0 n;
    }
  }, 0 n);
}, "ToIndex: valueOf => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asIntN({
    toString: function() {
      return 0 n;
    }
  }, 0 n);
}, "ToIndex: toString => BigInt => TypeError");
assert.throws(TypeError, function() {
  BigInt.asIntN(Symbol("1"), 0 n);
}, "ToIndex: Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asIntN(Object(Symbol("1")), 0 n);
}, "ToIndex: unbox object with internal slot => Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asIntN({
    [Symbol.toPrimitive]: function() {
      return Symbol("1");
    }
  }, 0 n);
}, "ToIndex: @@toPrimitive => Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asIntN({
    valueOf: function() {
      return Symbol("1");
    }
  }, 0 n);
}, "ToIndex: valueOf => Symbol => TypeError");
assert.throws(TypeError, function() {
  BigInt.asIntN({
    toString: function() {
      return Symbol("1");
    }
  }, 0 n);
}, "ToIndex: toString => Symbol => TypeError");
